import { IItem } from '../../model/item.model'
import { queryAllItems, queryItemById } from '../../controlers/item.controler'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useStylesChange } from '../../hooks/useStylesChange'
import Image from 'next/image'
import { ItemReview } from '../../components'
import { useUserAuthStateChange } from '../../hooks/useUserAuthStateChange'
import HeadInfo from '../../components/HeadInfo'
import ReviewForm from '../../components/ReviewForm'
import { useCallback, useEffect, useState } from 'react'
import { useAppContext } from '../../store/context/UserContext'
import { observer } from 'mobx-react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useRouter } from 'next/router'

type Props = {
  item: IItem
}

const ItemDetails: React.FC<Props> = ({ item }) => {
  const { category, image, price, title, description, reviews } = item
  const [open, setOpen] = useState(false)
  const { authStore, reviewStore, userCartStore } = useAppContext()
  const router = useRouter()
  useStylesChange('')
  useUserAuthStateChange()
  // if (reviews) reviewStore.setReviews(reviews)

  const setIsOpen = useCallback(
    (isOpen: boolean) => {
      setOpen(isOpen)
    },
    [open]
  )

  const handleCartChange = useCallback((name: string) => {
    name === 'add'
      ? userCartStore.addToCart(item)
      : userCartStore.removeFromCart(item.id!)
  }, [])

  useEffect(() => {
    if (reviews) reviewStore.setReviews(reviews)
  }, [])

  return (
    <section className=" px-3 pt-32 text-wh">
      <HeadInfo des={'details page for each otem'} title={'item-page'} />
      <button
        className="mb-4 rounded-full bg-wh p-1 text-bl hover:opacity-90"
        onClick={() => router.back()}
      >
        <ArrowBackIcon />
      </button>
      <div className="flex flex-row">
        <div className="mr-4 flex-1 rounded-md bg-white p-1 ">
          <Image
            src={image}
            priority
            layout="responsive"
            height={400}
            width={400}
            alt="item"
          />
        </div>
        <div className="flex w-2/4 flex-col font-pop text-wh">
          <h2 className="mb-3 text-3xl text-white">{title}</h2>
          <h3 className="mb-3 text-2xl opacity-90">category: {category}</h3>
          <p className="mb-3 text-lg  leading-7 opacity-90">{description}</p>
          <p className="mx-3 self-center text-2xl text-purple-200">{price}$</p>
          <button
            className="btn hover my-4"
            onClick={() => handleCartChange('add')}
          >
            add to cart
          </button>
          <button
            className="btn hover"
            onClick={() => handleCartChange('remove')}
          >
            remove from cart
          </button>
          <p className="flex-1"></p>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        {authStore.user ? (
          <button
            className="btn border-wl hover self-center bg-transparent p-2 text-wh"
            onClick={() => setIsOpen(true)}
          >
            add a comment
          </button>
        ) : (
          <h2 className="self-center text-2xl">
            please login to add a comment...
          </h2>
        )}
        {reviews?.length ? (
          <div className="md:grid-cols-reviews grid items-center gap-5">
            {reviewStore.reviews?.map((review) => (
              <ItemReview review={review} key={review.id} />
            ))}
          </div>
        ) : null}
      </div>
      <div>{open && <ReviewForm setIsOpen={setIsOpen} />}</div>
    </section>
  )
}

export default observer(ItemDetails)

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await queryAllItems()

  const paths = data?.map((item) => ({
    params: { id: `${item.id}` },
  }))

  return {
    paths: paths ?? [],
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string
  const data = await queryItemById(id)
  console.log(data)
  return {
    props: {
      item: data,
    },
  }
}
