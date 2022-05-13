import { useAppContext } from '../store/context/UserContext'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useStylesChange } from '../hooks/useStylesChange'

const cart = () => {
  const router = useRouter()
  const { userCartStore } = useAppContext()
  useStylesChange('')

  return (
    <section className="text-2xl">
      {userCartStore.cart?.length ? (
        <div>some cart</div>
      ) : (
        <h2>no items in cart</h2>
      )}
    </section>
  )
}

export default cart
