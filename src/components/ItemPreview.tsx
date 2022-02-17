import { UseQueryResult } from 'react-query'
import { GET_ALL_ITEMS } from '../graphql/itemQueries'
import { useGqlQuery } from '../hooks/useGqlQuery'
import { IItem } from '../model/item.model'
import ImageCarousel from './ImageCarousel'
import ItemCard from './ItemCard'

const ItemPreview = () => {
  const { data, error, isLoading } = useGqlQuery('items', GET_ALL_ITEMS)
  if (error) return <div>somthing went wromg</div>
  if (isLoading) return <div>loading...</div>

  return <section></section>
}

export default ItemPreview
