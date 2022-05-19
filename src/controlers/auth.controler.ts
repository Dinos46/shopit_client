import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import axios from 'axios'
import { ADD_USER, GET_USER } from '../graphql/userQueries'
import { auth } from '../services/firebaseService'
import { httpReq } from '../services/httpService'

export const register = async (
  email: string,
  password: string,
  username: string
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    if (res) {
      const variables = {
        email,
        username,
        image: '',
      }

      const { data } = await httpReq(ADD_USER, variables)
      return data.data.addUser?.data
    }
  } catch (err) {
    console.log(`error from auth register ${err}`)
  }
}

export const logIn = async (email: string, password?: string) => {
  try {
    if (password) {
      await signInWithEmailAndPassword(auth, email, password)
    }

    const { data } = await httpReq(GET_USER, { email })
    return data.data.getUser?.data
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
