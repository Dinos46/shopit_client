import { IItem } from './item.model'
import { IReview } from './review.model'
import { IUser } from './user.model'

interface IHttpData<T> {
  data: T
  status: string
  error: {
    message: string
  }
}

type ItemsRes = IHttpData<IItem[]>
type ItemRes = IHttpData<IItem>
type ReviewRes = IHttpData<IReview>
type ReviewResDel = IHttpData<string>
type UserRes = IHttpData<IUser>

export interface IHttpRes {
  data: {
    items?: ItemsRes
    item?: ItemRes
    register?: UserRes
    logIn?: UserRes
    getLogedInUser?: UserRes
    addReview?: ReviewRes
    editReview?: ReviewRes
    deleteReview?: ReviewResDel
  }
}
