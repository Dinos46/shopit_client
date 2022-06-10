//REAXT-NEXT
import Image from 'next/image'
import Link from 'next/link'
//MATERIAL-UI
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
//APP STATE
import { useAppContext } from '../../store/context/UserContext'
//COMPONENTS HOOKS TYPES
import { IItem } from '../../model/item.model'
import ShortTitle from '../Global/ShortTitle'

type Props = {
  item: IItem
}

const ItemCard: React.FC<Props> = ({ item }) => {
  const { userCartStore } = useAppContext()

  return (
    <article className="grid  overflow-hidden rounded-md bg-white p-2">
      <Link href={`/shop/${item.id}`}>
        <div className="cursor-pointer p-2">
          <Image
            src={item.image}
            height={250}
            width={250}
            objectFit="fill"
            layout="responsive"
          />
        </div>
      </Link>
      <div className="grid">
        {item.title.length > 20 ? (
          <ShortTitle title={item.title} />
        ) : (
          <h4 className=" self-end border-t-2 border-gray-200 font-pop  text-bl">
            {item.title}
          </h4>
        )}
        <div className="flex justify-between self-end">
          <span className="font-pop font-extrabold">{`${item.price}$`}</span>
          <div>
            <span
              className="cursor-pointer text-base"
              onClick={() => userCartStore.addToCart(item)}
            >
              <AddIcon fontSize="inherit" />
            </span>
            <span>1</span>
            <span
              className="cursor-pointer text-base"
              onClick={() => userCartStore.removeFromCart(item.id!)}
            >
              <RemoveIcon fontSize={'inherit'} />
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ItemCard
