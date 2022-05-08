import Link from 'next/link'
import { useRouter } from 'next/router'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import { useCallback, useState } from 'react'
import { useAppContext } from '../../store/context/UserContext'
import UserMenu from './UserMenu'

const Header = () => {
  const { authStore } = useAppContext()
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const handleClickAway = useCallback(() => {
    setOpen(false)
  }, [open])

  const onToggleMenu = useCallback(() => {
    setOpen((prev) => !prev)
  }, [open])

  const onLogOut = useCallback(async () => {
    await authStore.logOutUser()
    router.pathname !== '/' ? router.push('/') : window.scrollTo(0, 0)
  }, [])

  return (
    <header className="fixed z-40 w-full">
      <nav className="nav">
        <h1 className="text-2xl">
          <Link href="/">ShopIt</Link>
        </h1>
        <ul className="flex font-normal ">
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
        <div className="flex cursor-pointer items-center font-normal">
          <ClickAwayListener onClickAway={handleClickAway}>
            <div
              onClick={onToggleMenu}
              className="relative rounded-2xl border-2 border-pink-200  p-2"
            >
              <AccountCircleIcon />
              <MenuOpenIcon className="ml-3" />

              <div>
                {open && <UserMenu user={authStore.user} onLogOut={onLogOut} />}
              </div>
            </div>
          </ClickAwayListener>
          <ShoppingCartIcon className="ml-5" />
        </div>
      </nav>
    </header>
  )
}

export default Header
