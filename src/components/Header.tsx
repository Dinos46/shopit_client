import Link from 'next/link'
import { useRouter } from 'next/router'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

const Header = () => {
  const router = useRouter()

  return (
    <header className="header">
      <h1 className="text-2xl">
        <Link href="/">ShopIt</Link>
      </h1>
      <ul className="flex font-normal">
        <li className={`capitalize ${router.pathname === '/' ? 'activ' : ' '}`}>
          <Link href="/">home</Link>
        </li>
        <li
          className={`mx-3 capitalize ${
            router.pathname === '/about' ? 'activ' : ''
          }`}
        >
          <Link href="/about">about</Link>
        </li>
        <li
          className={`capitalize ${router.pathname === '/shop' ? 'activ' : ''}`}
        >
          <Link href="/shop">store</Link>
        </li>
      </ul>
      <div className="flex font-normal">
        <div className="mr-3">user panel</div>
        <ShoppingCartIcon />
      </div>
    </header>
  )
}

export default Header
