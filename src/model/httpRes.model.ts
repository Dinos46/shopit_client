import { IItem } from './item.model'
import { IReview } from './review.model'

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
type UserRes = IHttpData<string>

export interface IHttpRes {
  data: {
    items?: ItemsRes
    item?: ItemRes
    addUser?: UserRes
    getUser?: UserRes
    getLogedInUser?: UserRes
    addReview?: ReviewRes
    editReview?: ReviewRes
    deleteReview?: ReviewResDel
  }
}
