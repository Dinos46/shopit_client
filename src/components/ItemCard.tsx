import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IItem } from '../model/item.model'

type Props = {
  item: IItem
}

const ItemCard: React.FC<Props> = ({ item }) => {
  return (
    <Link href={`/shop/${item.id}`}>
      <article className="grid cursor-pointer overflow-hidden rounded-md bg-white p-2">
        <Image
          src={item.image}
          height={250}
          width={250}
          objectFit="fill"
          layout="responsive"
        />
        <h4 className="self-center border-t-2 border-gray-200 font-pop  text-bl">
          {item.title}
        </h4>
      </article>
    </Link>
  )
}

export default ItemCard
