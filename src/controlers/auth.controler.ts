import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import axios from 'axios'
import { ADD_User, GET_LOGEDIN_USER, GET_USER } from '../graphql/userQueries'
import { auth } from '../services/firebaseService'
import { baseUrl } from '../../appConfig/config'
import { IUser } from '../model/user.model'

const _getFirebaseToken = async () => {
  axios.defaults.baseURL = baseUrl || process.env.BASE_URL

  const token = await auth.currentUser?.getIdToken()
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    return token
  }
  return null
}

export const register = async (
  email: string,
  password: string,
  username: string
) => {
  await _getFirebaseToken()
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    console.log(res)
    if (res) {
      const queryData = {
        query: ADD_User,
        variables: {
          email,
          username,
          image: '',
        },
      }
      const dbRes = await axios.post('', queryData)
      if (dbRes?.data) {
        return dbRes.data.data.addUser
      }
    }
  } catch (err) {
    console.log(`error from auth register ${err}`)
    //TODO error service
  }
}

export const logIn = async (email: string, password: string) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password)
    await _getFirebaseToken()
    const queryData = {
      query: GET_USER,
      variables: {
        email,
        image: '',
      },
    }
    const dbRes = await axios.post('', queryData)
    if (dbRes?.data) {
      console.log('DB RES')
      return dbRes.data.data.getUser
    }
  } catch (err) {
    console.log(`error from auth logIn ${err}`)
    //TODO error service
  }
}

export const logOut = async () => {
  try {
    await signOut(auth)
  } catch (err) {
    console.log(`error from auth logOut ${err}`)
    //TODO error service
  }
}

export const getLogedInUser = async (email: string) => {
  _getFirebaseToken()
  try {
    const queryData = {
      query: GET_LOGEDIN_USER,
      variables: {
        email,
      },
    }
    const { data } = await axios.post('', queryData)
    return data?.data?.getLogedInUser as IUser
  } catch (err) {
    console.log(`no loged in user ${err}`)
    //TODO error service
  }
}
