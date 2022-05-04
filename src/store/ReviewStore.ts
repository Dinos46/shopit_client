import { IReview, IReviewInput } from '../model/review.model'
import { observable, makeObservable, action, runInAction } from 'mobx'
import { mutateReview } from '../controlers/item.controler'

class ReviewStore {
  isLoading: boolean = false
  currReview: IReview | null = null

  constructor() {
    makeObservable(this, {
      isLoading: observable,
      currReview: observable,
      setCurrReview: action,
      createReview: action,
      removeReview: action,
      updateReview: action,
    })
  }

  setCurrReview(review: IReview) {
    this.currReview = review
  }

  async createReview(input: IReviewInput) {
    try {
      await mutateReview(input)
    } catch (err) {
      console.log('error from review store, cant create review', err)
    }
  }
  async updateReview(input: IReviewInput) {
    try {
      await mutateReview(input)
    } catch (err) {
      console.log('error from review store, cant create review', err)
    }
  }

  async removeReview(id: string) {
    try {
    } catch (err) {
      console.log('error from review store, cant delete review', err)
    }
  }
}

export default ReviewStore
