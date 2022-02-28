import AuthStore from './AuthStore'
import ItemStore from './ItemStore'

export class RootStore {
  authStore: AuthStore
  itemStore: ItemStore

  constructor() {
    this.authStore = new AuthStore(this)
    this.itemStore = new ItemStore(this)
  }
}

export const rootStore = new RootStore()
