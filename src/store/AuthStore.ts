import { observable, makeObservable, action, runInAction } from 'mobx'
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

  async createUser() {}
  async logOut() {}
  async logIn() {}
}

export default AuthStore
