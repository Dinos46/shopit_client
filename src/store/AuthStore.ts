import { observable, makeObservable, action, runInAction } from 'mobx'
import { register, logIn, logOut } from '../controlers/auth.controler'
import { IUser } from '../model/user.model'
import { RootStore } from './RootStore'
class AuthStore {
  isLoading: boolean = false
  user: IUser | null = null
  rootStore: RootStore

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    makeObservable(this, {
      user: observable,
      isLoading: observable,
      createUser: action,
      logOutUser: action,
      logInUser: action,
      setUser: action,
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
    } finally {
      runInAction(() => {
        this.isLoading = false
      })
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
    } finally {
      runInAction(() => {
        this.isLoading = false
      })
    }
  }

  setUser(user: IUser) {
    this.user = user
  }
}

export default AuthStore
