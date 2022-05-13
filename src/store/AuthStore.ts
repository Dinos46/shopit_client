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
        console.log(`error from create user auth store`, err)
        this.isLoading = false
      })
    }
  }

  async logOutUser() {
    try {
      await logOut()
      runInAction(() => {
        this.user = null
      })
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
        console.log(`error from login auth store`, err)
        this.isLoading = false
      })
    }
  }

  async getUserData(email: string) {
    this.isLoading = true
    try {
      const user = await getLogedInUser(email)
      runInAction(() => {
        this.isLoading = false
        if (user) {
          this.user = user
        }
      })
    } catch (err) {
      console.log(`error from loged in user auth store `, err)
      this.isLoading = false
    }
  }
}

export default AuthStore
