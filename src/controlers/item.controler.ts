import axios from 'axios'
import { GET_ALL_ITEMS, GET_ITEM_BY_ID } from '../graphql/itemQueries'

axios.defaults.baseURL =
  process.env.NODE_ENV === 'production'
    ? process.env.BASE_URL
    : process.env.NEXT_PUBLIC_BASE_URL

export const queryAllItems = async (ctg = '', name = '') => {
  try {
    const { data } = await axios.post('', {
      query: GET_ALL_ITEMS,
      variables: {
        ctg,
        name,
      },
    })
    return data.data
  } catch (err) {
    console.log(`error from controller get all items ${err}`)
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
    console.log(`error from controller get item by id ${err}`)
  }
}
