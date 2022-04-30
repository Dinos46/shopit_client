import { observable, makeObservable, action, runInAction } from 'mobx'
import {
  register,
  logIn,
  logOut,
  getLogedInUser,
} from '../controlers/auth.controler'
import { IUser } from '../model/user.model'

class AuthStore {
  isLoading = false
  user: IUser | null = null

  constructor() {
    makeObservable(this, {
      user: observable,
      isLoading: observable,
      createUser: action,
      logOutUser: action,
      logInUser: action,
      getUserData: action,
    })
  }

  async createUser(email: string, password: string, username: string) {
    this.isLoading = true
    try {
      const res = await register(email, password, username)
      runInAction(() => {
        this.user = res
        this.isLoading = false
      })
    } catch (err) {
      runInAction(() => {
        this.isLoading = false
      })
      console.log(`error from create user auth store ${err}`)
    }
  }

  async logOutUser() {
    try {
      await logOut()
      this.user = null
    } catch (err) {
      console.log(`error from logout auth store ${err}`)
    }
  }

  async logInUser(email: string, password: string) {
    this.isLoading = true
    try {
      const user = await logIn(email, password)
      runInAction(() => {
        this.user = user
        this.isLoading = false
      })
    } catch (err) {
      runInAction(() => {
        this.isLoading = false
      })
      console.log(`error from login auth store ${err}`)
    }
  }

  async getUserData(email: string) {
    try {
      const user = await getLogedInUser(email)
      runInAction(() => {
        if (user) {
          this.user = user
        }
        // console.log('LOGEDIN USER', user)
      })
    } catch (err) {
      console.log(`error from loged in user auth store ${err}`)
    }
  }
}

export default AuthStore
