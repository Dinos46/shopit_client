import { useRouter } from 'next/router'
import { GET_ALL_ITEMS } from '../graphql/itemQueries'
import { useGqlQuery } from '../hooks/useGqlQuery'

const shop = () => {
  const router = useRouter()
  // const { data, error, isLoading } = useGqlQuery('items', GET_ALL_ITEMS, {
  //   ctg: router?.query?.ctg || '',
  // })
  return <div>shop</div>
}

export default shop
