import Link from 'next/link'
import { useRouter } from 'next/router'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const Header = () => {
  const router = useRouter()

  const onToggleMenu = () => {
    console.log('open')
  }

  return (
    <header className="fixed z-50 w-full">
      <nav className="nav">
        <h1 className="text-2xl">
          <Link href="/">ShopIt</Link>
        </h1>
        <ul className="flex font-normal">
          <li
            className={`capitalize ${router.pathname === '/' ? 'activ' : ' '}`}
          >
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
            className={`capitalize ${
              router.pathname === '/shop' ? 'activ' : ''
            }`}
          >
            <Link href="/shop">store</Link>
          </li>
        </ul>
        <div
          className="flex cursor-pointer items-center font-normal"
          onClick={onToggleMenu}
        >
          <div className="rounded-2xl border-2 border-pink-200  p-2">
            <AccountCircleIcon />
            <MenuOpenIcon className="ml-3" />
          </div>
          <ShoppingCartIcon className="ml-5" />
        </div>
      </nav>
    </header>
  )
}

export default Header
