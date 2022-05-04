import AuthStore from './AuthStore'
import ItemStore from './ItemStore'
import ReviewStore from './ReviewStore'

export class RootStore {
  authStore: AuthStore
  itemStore: ItemStore
  reviewStore: ReviewStore

  constructor() {
    this.authStore = new AuthStore()
    this.itemStore = new ItemStore()
    this.reviewStore = new ReviewStore()
  }
}

export const rootStore = new RootStore()
