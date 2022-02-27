import { useRouter } from 'next/router'
import { onHeaderStyleChange } from '../util/stylesChange'

const shop = () => {
  const router = useRouter()
  onHeaderStyleChange('')

  return <div>SHOP</div>
}

export default shop
