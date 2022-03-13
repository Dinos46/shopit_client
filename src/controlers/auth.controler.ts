import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { auth } from '../services/firebaseService'
import axios from 'axios'
import { ADD_User, GET_USER } from '../graphql/userQueries'
import { appConfig } from '../constants/appConfig'

const _getFirebaseToken = async () => {
  axios.defaults.baseURL = appConfig().baseUrl
  const token = await auth.currentUser?.getIdToken()
  // console.log('token', token)
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
    if (res) {
      // console.log('AFTER FIREBASE RES')

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
        // console.log('DB RES')
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
