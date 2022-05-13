import { IItem } from './item.model'
export interface IUser {
  id?: string
  username: string
  email: string
  image: string
  role: string
}

export interface ICartItem {
  item: IItem
  qty: number
}
