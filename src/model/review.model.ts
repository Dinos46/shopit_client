import { IUser } from './user.model'

export interface IReview {
  id: string
  title: string
  body: string
  rating: string
  createdAt: string
  updatedAt: string
  user: IUser
}

export interface IReviewInput {
  id?: string
  title: string
  body: string
  rating: string
  itemId: string
  userId: string
}
