import { useRouter } from 'next/router'
import { GET_ALL_ITEMS } from '../graphql/itemQueries'
import { useGqlQuery } from '../hooks/useGqlQuery'
import { onHeaderStyleChange } from '../util/stylesChange'

const shop = () => {
  const router = useRouter()
  onHeaderStyleChange('')

  // const { data, error, isLoading } = useGqlQuery('items', GET_ALL_ITEMS, {
  //   ctg: router?.query?.ctg || '',
  // })
  return <div>shop</div>
}

export default shop
