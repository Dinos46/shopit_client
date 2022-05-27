import axios from 'axios'
import { GET_ALL_ITEMS, GET_ITEM_BY_ID } from '../graphql/itemQueries'
import {
  CREATE_REVIEW,
  DELETE_REVIEW,
  UPDATE_REVIEW,
} from '../graphql/reviewQueries'
import { IFilterBy } from '../model/filterBy.model'
import { IReviewInput } from '../model/review.model'
import { httpReq } from '../services/httpService'

export const queryAllItems = async (filter?: IFilterBy) => {
  const filterBy = {
    ctg: filter?.ctg || '',
    name: filter?.name || '',
    maxPrice: filter?.maxPrice || undefined,
    minPrice: filter?.minPrice || undefined,
  }
  try {
    const { data } = await httpReq(GET_ALL_ITEMS, filterBy)
    if (data) {
      return data.data.items?.data
    }
  } catch (err) {
    console.log(`error from controller get all items`, err)
  }
}

export const queryItemById = async (id: string) => {
  try {
    // const { data } = await axios.post<IHttpRes>('', {
    //   query: GET_ITEM_BY_ID,
    //   variables: {
    //     id,
    //   },
    // })
    const { data } = await httpReq(GET_ITEM_BY_ID, { id })
    if (data) {
      console.log('ITEM', data.data.item?.data)
      return data.data.item?.data
    }
  } catch (err) {
    console.log(`error from controller get item by id`, err)
  }
}

export const mutateReview = async (reviewToAdd: IReviewInput) => {
  // await getFirebaseToken()
  const query = reviewToAdd.id ? UPDATE_REVIEW : CREATE_REVIEW
  try {
    // const { data } = await axios.post('', {
    //   query,
    //   variables: reviewToAdd,
    // })
    const { data } = await httpReq(query, reviewToAdd)
    console.log('REVIEW', data.data.addReview?.data)
    return reviewToAdd.id
      ? data.data.editReview?.data
      : data.data.addReview?.data
  } catch (err) {
    console.log(`error from controller mutate a review`, err)
  }
}

export const deleteReview = async (reviewId: string) => {
  // await getFirebaseToken()

  try {
    // const { data } = await axios.post('', {
    //   query: DELETE_REVIEW,
    //   variables: { reviewId },
    // })
    await httpReq(DELETE_REVIEW, { reviewId })
  } catch (err) {
    console.log(`error from controller mutate a review`, err)
  }
}
