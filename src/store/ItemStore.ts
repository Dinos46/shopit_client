import { IItem } from '../model/item.model'
import { RootStore } from './RootStore'
import { observable, makeObservable, action, runInAction } from 'mobx'

class ItemStore {
  rootStore: RootStore
  items: IItem[] = []
  isLoading: boolean = false

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore

    makeObservable(this, {})
  }
}

export default ItemStore
