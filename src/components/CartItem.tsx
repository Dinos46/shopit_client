import Image from 'next/image'
import React, { useCallback, useMemo } from 'react'
import { ICartItem } from '../model/user.model'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { useAppContext } from '../store/context/UserContext'
import { observer } from 'mobx-react'

type Props = {
  cartItem: ICartItem
}

const CartItem: React.FC<Props> = ({ cartItem }) => {
  const { item, qty } = cartItem
  const { userCartStore } = useAppContext()

  const total = useMemo(() => {
    return userCartStore.getItemTotalPrice(cartItem)
  }, [qty])

  const handleClick = useCallback((name: string) => {
    name === 'add'
      ? userCartStore.addToCart(item)
      : userCartStore.removeFromCart(item.id!)
  }, [])

  return (
    <article className="col-span-full grid grid-cols-cart-grid items-center justify-between gap-2 border-b-4 border-slate-200 bg-wh p-2 font-pop">
      <Image src={item.image} height={80} width={80} layout="fixed" />
      <p className="content-evenly text-xl font-light">{item.title}</p>
      <p className="mr-4 text-xl font-light">total: {total.toFixed(2)}$</p>
      <div className="flex items-center justify-self-end">
        <button
          onClick={() => handleClick('add')}
          className="text-xl font-light"
        >
          <AddIcon />
        </button>
        <p className="mx-2">{qty}</p>
        <button
          onClick={() => handleClick('remove')}
          className="text-xl font-light"
        >
          <RemoveIcon />
        </button>
      </div>
    </article>
  )
}

export default observer(CartItem)
