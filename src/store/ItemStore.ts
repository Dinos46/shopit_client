import { IItem } from '../model/item.model'
import { observable, makeObservable, action, runInAction } from 'mobx'
import { IFilterBy } from '../model/filterBy.model'
import { queryAllItems } from '../controlers/item.controler'

class ItemStore {
  isLoading = false
  items: IItem[] | null = null

  constructor() {
    makeObservable(this, {
      isLoading: observable,
      items: observable,
      getFilteredItems: action,
      setItems: action,
    })
  }

  async getFilteredItems(filter?: IFilterBy) {
    this.isLoading = true
    try {
      const items = await queryAllItems(filter)
      console.log(items)
      runInAction(() => {
        if (items) {
          this.setItems(items)
          this.isLoading = false
        }
      })
    } catch (err) {
      runInAction(() => {
        this.isLoading = false
        console.log('error from item store cannot filter', err)
      })
    }
  }

  setItems(items: IItem[]) {
    this.items = items
  }
}

export default ItemStore
