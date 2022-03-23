import React from 'react'
import { IItem } from '../../model/item.model'
import { queryAllItems, queryItemById } from '../../controlers/item.controler'
import { GetStaticPaths, GetStaticProps } from 'next'

type Props = {
  item: IItem
}

const ItemDetails: React.FC<Props> = ({ item }) => {
  console.log('item', item)

  return <div>ItemDetails</div>
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
