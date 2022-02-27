import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import { auth } from '../services/firebaseService'

export const register = async (email: string, password: string) => {
  try {
    const res = createUserWithEmailAndPassword(auth, email, password)
    return res
  } catch (err) {
    console.log(`error from auth register ${err}`)
  }
}

export const logIn = async (email: string, password: string) => {
  try {
    const user = signInWithEmailAndPassword(auth, email, password)
    return user
  } catch (err) {
    console.log(`error from auth logIn ${err}`)
  }
}

export const logOut = async () => {
  try {
  } catch (err) {
    console.log(`error from auth logOut ${err}`)
  }
}
