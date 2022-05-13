import { action, computed, makeObservable, observable, toJS } from 'mobx'
import { IItem } from '../model/item.model'
import { ICartItem } from '../model/user.model'

class UserCartStore {
  cart: ICartItem[] = []

  constructor() {
    makeObservable(this, {
      cart: observable,
      cartCount: computed,
      cartValue: computed,
      removeFromCart: action,
      addToCart: action,
      setCart: action,
      getItemTotalPrice: action,
    })
  }

  get cartCount() {
    return this.cart.length
  }

  getItemTotalPrice({ item, qty }: ICartItem) {
    return item.price * qty
  }

  addToCart(itemToAdd: IItem) {
    const idx = this.cart.findIndex(({ item }) => item.id === itemToAdd.id)
    if (!this.cart.length || idx === -1) {
      console.log('first')
      console.log('found', idx)
      this.cart.push({ qty: 1, item: itemToAdd })
      return
    }
    this.cart[idx].qty++
  }

  removeFromCart(id: string) {
    if (!this.cart.length) return
    const idx = this.cart.findIndex(({ item }) => item.id === id)
    if (idx === -1) return
    if (this.cart[idx].qty > 1) {
      this.cart[idx].qty--
      return
    }
    this.cart.splice(idx, 1)
  }

  get cartValue() {
    return this.cart.reduce((acc, { item, qty }) => {
      return (acc += item.price * qty)
    }, 0)
  }

  setCart(cart: ICartItem[]) {
    this.cart = cart
  }
}

export default UserCartStore
