import { IItem } from '../model/item.model'
import { RootStore } from './RootStore'
import { observable, makeObservable, action, runInAction } from 'mobx'
import { IFilterBy } from '../model/IFilterBy'
import { queryAllItems } from '../controlers/item.controler'

class ItemStore {
  rootStore: RootStore
  filterItems: IItem[] | null = null
  isLoading: boolean = false

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore

    makeObservable(this, {
      filterItems: observable,
      isLoading: observable,
      getFilteredItems: action,
    })
  }

  async getFilteredItems(filter: IFilterBy) {
    this.isLoading = true
    try {
      const items = await queryAllItems(filter)
      console.log('FILTER_STORE', items)
      runInAction(() => {
        this.filterItems = items
        this.isLoading = false
      })
    } catch (err) {
      this.isLoading = false
      console.log('error from item store cannot filter', err)
    }
  }
}

export default ItemStore
