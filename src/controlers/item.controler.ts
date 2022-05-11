import axios from 'axios'
import { GET_ALL_ITEMS, GET_ITEM_BY_ID } from '../graphql/itemQueries'
import {
  CREATE_REVIEW,
  DELETE_REVIEW,
  UPDATE_REVIEW,
} from '../graphql/reviewQueries'
import { IFilterBy } from '../model/IFilterBy'
import { IReviewInput } from '../model/review.model'
import { auth } from '../services/firebaseService'

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL

const _getFirebaseToken = async () => {
  const token = await auth.currentUser?.getIdToken()
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    return token
  }
  return null
}

export const queryAllItems = async (filter?: IFilterBy): Promise<any> => {
  const filterBy = {
    ctg: filter?.ctg || '',
    name: filter?.name || '',
    maxPrice: filter?.maxPrice || undefined,
    minPrice: filter?.minPrice || undefined,
  }
  try {
    const { data } = await axios.post('', {
      query: GET_ALL_ITEMS,
      variables: filterBy,
    })
    return data?.data
  } catch (err) {
    console.log(`error from controller get all items`, err)
  }
}

export const queryItemById = async (id: string) => {
  try {
    const { data } = await axios.post('', {
      query: GET_ITEM_BY_ID,
      variables: {
        id,
      },
    })
    return data.data
  } catch (err) {
    console.log(`error from controller get item by id`, err)
  }
}

export const mutateReview = async (reviewToAdd: IReviewInput) => {
  await _getFirebaseToken()
  const query = reviewToAdd.id ? UPDATE_REVIEW : CREATE_REVIEW
  try {
    const { data } = await axios.post('', {
      query,
      variables: reviewToAdd,
    })
    return reviewToAdd.id ? data.data.editReview : data.data.addReview
  } catch (err) {
    console.log(`error from controller mutate a review`, err)
  }
}

export const deleteReview = async (reviewId: string) => {
  await _getFirebaseToken()

  try {
    const { data } = await axios.post('', {
      query: DELETE_REVIEW,
      variables: { reviewId },
    })
  } catch (err) {
    console.log(`error from controller mutate a review`, err)
  }
}
