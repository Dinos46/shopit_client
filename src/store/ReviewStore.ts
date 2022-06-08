import { IReview, IReviewInput } from '../model/review.model'
import { observable, makeObservable, action, runInAction } from 'mobx'
import { deleteReview, mutateReview } from '../controlers/item.controler'

class ReviewStore {
  isLoading: boolean = false
  currReview: IReview | null = null
  reviews: IReview[] = []

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

  setReviews(reviews: IReview[]) {
    this.reviews = reviews
  }

  async createReview(input: IReviewInput) {
    const reviewToUAdd = {
      body: input.body,
      title: input.title,
      rating: input.rating,
      userId: input.userId,
      itemId: input.itemId,
    }
    try {
      this.isLoading = true
      const res = await mutateReview(reviewToUAdd)
      runInAction(() => {
        if (res) {
          this.reviews.push(res)
          this.isLoading = false
        }
      })
    } catch (err) {
      runInAction(() => {
        this.isLoading = false
        console.log('error from review store, cant create review', err)
      })
    }
  }

  async updateReview(input: IReviewInput) {
    const reviewToUpdate = {
      body: input.body,
      title: input.title,
      rating: input.rating,
      id: input.id,
      userId: input.userId,
    }
    try {
      this.isLoading = true
      const res = await mutateReview(reviewToUpdate)
      runInAction(() => {
        if (res) {
          this.isLoading = false
          const idx = this.reviews?.findIndex((rev) => res.id === rev.id)
          this.reviews[idx] = res
        }
      })
    } catch (err) {
      runInAction(() => {
        this.isLoading = false
        console.log('error from review store, cant create review', err)
      })
    }
  }

  async removeReview(id: string) {
    try {
      this.isLoading = true
      await deleteReview(id)
      runInAction(() => {
        this.reviews = this.reviews?.filter((review) => id !== review.id)
        this.isLoading = false
      })
    } catch (err) {
      runInAction(() => {
        this.isLoading = false
        console.log('error from review store, cant delete review', err)
      })
    }
  }
}

export default ReviewStore
