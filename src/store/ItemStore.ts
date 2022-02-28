import { IItem } from '../model/item.model'
import { RootStore } from './RootStore'
import { observable, makeObservable, action, runInAction } from 'mobx'

class ItemStore {
  rootStore: RootStore
  items: IItem[] = []

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore

    makeObservable(this, {
      items: observable,
      setItems: action,
    })
  }

  setItems(items: IItem[]) {
    this.items = items
  }
}

export default ItemStore
