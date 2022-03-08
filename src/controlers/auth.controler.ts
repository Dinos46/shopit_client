import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { auth } from '../services/firebaseService'
import axios from 'axios'
import { ADD_User } from '../graphql/userQueries'
import { appConfig } from '../../constants/appConfig'

export const register = async (
  email: string,
  password: string,
  username: string
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    if (res) {
      const token = await _getFirebaseToken()

      const queryData = {
        query: ADD_User,
        variables: {
          email,
          username,
          image: '',
        },
      }
      const res = axios.post(appConfig.baseUrl, queryData)
      console.log('DATA', res)
    }
    return res
  } catch (err) {
    console.log(`error from auth register ${err}`)
  }
}

export const logIn = async (email: string, password: string) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password)
    return user
  } catch (err) {
    console.log(`error from auth logIn ${err}`)
  }
}

export const logOut = async () => {
  try {
    await signOut(auth)
  } catch (err) {
    console.log(`error from auth logOut ${err}`)
  }
}

const _getFirebaseToken = async () => {
  axios.defaults.baseURL = appConfig.baseUrl
  const token = await auth.currentUser?.getIdToken()
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    return token
  }
  return null
}
