import { useRouter } from 'next/router'
import { useGqlQuery } from '../hooks/useGqlQuery'

const shop = () => {
  const router = useRouter()
  // useGqlQuery('')
  console.log('SHOP', router.query)
  return <div>shop</div>
}

export default shop
