import Image from 'next/image'
import React from 'react'
import { IItem } from '../model/item.model'

type Props = {
  item: IItem
}

const ItemCard: React.FC<Props> = ({ item }) => {
  return (
    <article>
      <Image src={item.image} height={50} width={50} />
      <h4>{item.title}</h4>
    </article>
  )
}

export default ItemCard
