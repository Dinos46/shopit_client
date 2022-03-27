import { IItem } from '../../model/item.model'
import { queryAllItems, queryItemById } from '../../controlers/item.controler'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useStylesChange } from '../../hooks/useStylesChange'
import Image from 'next/image'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import { ItemReview } from '../../components'

type Props = {
  item: IItem
}

const ItemDetails: React.FC<Props> = ({ item }) => {
  const { category, image, price, title, description, reviews } = item

  useStylesChange('')

  return (
    <section className=" pt-32 text-wh">
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
        <div className="w-2/4 font-pop text-wh">
          <h2 className="mb-3 text-3xl text-white">{title}</h2>
          <h3 className="mb-3 text-2xl opacity-90">category: {category}</h3>
          <p className="mb-3 text-lg  leading-7 opacity-90">{description}</p>
          <div className="flex  justify-center">
            <button className="self-center">
              <AddIcon />
            </button>
            <p className="mx-3 text-right text-2xl text-purple-200">{price}$</p>
            <button className="self-center">
              <RemoveIcon />
            </button>
          </div>
        </div>
      </div>
      <div>
        {reviews?.length ? (
          <div>
            {reviews.map((review) => (
              <ItemReview review={review} />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default ItemDetails

export const getStaticPaths: GetStaticPaths = async () => {
  const { items } = await queryAllItems()

  const paths = items.map((item: IItem) => ({
    params: { id: item.id + '' },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string
  const { item } = await queryItemById(id)

  return {
    props: {
      item,
    },
  }
}
