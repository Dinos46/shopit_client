import AuthStore from './AuthStore'
import ItemStore from './ItemStore'
import ReviewStore from './ReviewStore'
import UserCartStore from './UserCartStore'

export class RootStore {
  authStore: AuthStore
  itemStore: ItemStore
  reviewStore: ReviewStore
  userCartStore: UserCartStore

  constructor() {
    this.authStore = new AuthStore()
    this.itemStore = new ItemStore()
    this.reviewStore = new ReviewStore()
    this.userCartStore = new UserCartStore()
  }
}

export const rootStore = new RootStore()
