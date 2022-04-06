import { observer } from 'mobx-react'
import { GetServerSideProps } from 'next'
import { ShopFilter, ItemCard } from '../../components'
import HeadInfo from '../../components/HeadInfo'
import { queryAllItems } from '../../controlers/item.controler'
import { useStylesChange } from '../../hooks/useStylesChange'
import { useUserAuthStateChange } from '../../hooks/useUserAuthStateChange'
import { IItem } from '../../model/item.model'

type Props = {
  items: IItem[]
}

const shop: React.FC<Props> = ({ items }) => {
  useStylesChange('')
  useUserAuthStateChange()

  if (!items) return <p>Loading...</p>

  return (
    <section className="pt-52">
      <HeadInfo des={'store items collection'} title={'shop'} />
      <ShopFilter />
      <section className="grid grid-cols-auto-fit gap-6">
        {items?.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </section>
    </section>
  )
}

export default observer(shop)

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await queryAllItems()
  return {
    props: {
      items: data?.items,
    },
  }
}
