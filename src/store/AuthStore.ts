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
    })
  }

  async createUser(email: string, password: string, username: string) {
    this.isLoading = true
    const res = await register(email, password, username)
    this.user = res
    this.isLoading = false
  }

  async logOutUser() {
    await logOut()
    this.user = null
  }

  async logInUser(email: string, password: string) {
    this.isLoading = true
    const user = await logIn(email, password)
    this.user = user
    this.isLoading = false
  }
}

export default AuthStore
