import { IReview, IReviewInput } from '../model/review.model'
import { observable, makeObservable, action, runInAction } from 'mobx'
import { deleteReview, mutateReview } from '../controlers/item.controler'

class ReviewStore {
  isLoading: boolean = false
  currReview: IReview | null = null
  reviews: IReview[] | undefined = []

  constructor() {
    makeObservable(this, {
      isLoading: observable,
      currReview: observable,
      reviews: observable,
      setReviews: action,
      createReview: action,
      removeReview: action,
      updateReview: action,
    })
  }

  setReviews(reviews: IReview[] | undefined) {
    this.reviews = reviews
  }

  async createReview(input: IReviewInput) {
    try {
      const res = await mutateReview(input)
      this.reviews?.push(res.addReview)
    } catch (err) {
      console.log('error from review store, cant create review', err)
    }
  }

  async updateReview(input: IReviewInput) {
    const reviewToUpdate = {
      body: input.body,
      title: input.title,
      rating: input.rating,
      id: input.id,
    }
    try {
      await mutateReview(reviewToUpdate)
      console.log('STORE', input)
    } catch (err) {
      console.log('error from review store, cant create review', err)
    }
  }

  async removeReview(id: string) {
    try {
      await deleteReview(id)
      this.reviews = this.reviews?.filter((review) => id !== review.id)
    } catch (err) {
      console.log('error from review store, cant delete review', err)
    }
  }
}

export default ReviewStore
