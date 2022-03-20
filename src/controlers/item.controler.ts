import axios from 'axios'
import { appConfig } from '../../constants/appConfig'
import { GET_ALL_ITEMS } from '../graphql/itemQueries'

export const queryAllItems = async (ctg = '', name = '') => {
  try {
    const { data } = await axios.post(appConfig().baseUrl as string, {
      query: GET_ALL_ITEMS,
      variables: {
        ctg,
        name,
      },
    })
    return data.data
  } catch (err) {
    console.log(`error from get all items ${err}`)
  }
}

export const queryItemById = async () => {}
