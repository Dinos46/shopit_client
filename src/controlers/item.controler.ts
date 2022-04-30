import axios, { AxiosResponse } from 'axios'
import { GET_ALL_ITEMS, GET_ITEM_BY_ID } from '../graphql/itemQueries'
import { IFilterBy } from '../model/IFilterBy'
import { IItem } from '../model/item.model'

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL
// process.env.NODE_ENV === 'production'
//   ? process.env.BASE_URL
//   :

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
    throw new Error('')
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
