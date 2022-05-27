import { useAppContext } from '../store/context/UserContext'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useStylesChange } from '../hooks/useStylesChange'
import { CartItem } from '../components'
import { observer } from 'mobx-react'
import Link from 'next/link'
import HeadInfo from '../components/HeadInfo'

const cart = () => {
  const router = useRouter()
  const { userCartStore, authStore } = useAppContext()
  useStylesChange('')

  return (
    <section className=" pt-32 text-2xl">
      <HeadInfo des={'cart page for this fake online store'} title={'Cart'} />
      {userCartStore.cart?.length ? (
        <div>
          <div className="grid grid-cols-3">
            {userCartStore.cart.map((item, idx) => (
              <CartItem cartItem={item} key={item.item.id! + idx} />
            ))}
          </div>
          <div className="flex justify-between rounded-b-md border-t-4 border-bl bg-wh p-2">
            <p>total: {userCartStore.cartValue.toFixed(2)}$</p>
            {authStore.user ? (
              <button>proceed to checkout</button>
            ) : (
              <Link href={'/login'}>login to complete purchase</Link>
            )}
          </div>
        </div>
      ) : (
        <h2 className="text-center font-pop text-2xl text-wh">
          no items in cart
        </h2>
      )}
    </section>
  )
}

export default observer(cart)
