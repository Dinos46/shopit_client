import { IUser } from './user.model'

export interface IReview extends IBaseReview {
  createdAt: string
  updatedAt: string
  user: IUser
}

export interface IReviewInput extends IBaseReview {
  itemId: string
  userId: string
}

interface IBaseReview {
  id?: string
  title: string
  body: string
  rating: number
}
