import { observer } from 'mobx-react'
import { GetServerSideProps } from 'next'
import { useCallback, useState } from 'react'
import { ShopFilter, ItemCard } from '../../components'
import HeadInfo from '../../components/HeadInfo'
import { queryAllItems } from '../../controlers/item.controler'
import { useStylesChange } from '../../hooks/useStylesChange'
import { useUserAuthStateChange } from '../../hooks/useUserAuthStateChange'
import { EvForm, EvInput } from '../../model/IFilterBy'
import { IItem } from '../../model/item.model'
import { useAppContext } from '../../store/context/UserContext'

type Props = {
  items: IItem[]
}

const shop: React.FC<Props> = ({ items }) => {
  const { itemStore } = useAppContext()
  const { filterItems, getFilteredItems } = itemStore
  const itemsToDisplay = filterItems || items

  useStylesChange('')
  useUserAuthStateChange()
  if (!itemsToDisplay) return <p>Loading...</p>

  const [filter, setFilter] = useState({
    itemName: '',
    minPrice: 0,
    maxPrice: 0,
    ctg: '',
  })

  const handleChange = useCallback(
    (ev: EvInput) => {
      const { name } = ev.currentTarget
      const { value } = ev.currentTarget
      setFilter((prevFilter) => ({
        ...prevFilter,
        [name]: value,
      }))
    },
    [filter, setFilter]
  )

  const handleSubmit = useCallback(async (ev: EvForm) => {
    ev.preventDefault()
    await getFilteredItems(filter)
  }, [])

  return (
    <section className="pt-36">
      <HeadInfo des={'store items collection'} title={'shop'} />
      <ShopFilter
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        filter={filter}
      />
      <section className="grid grid-cols-auto-fit gap-6">
        {itemsToDisplay?.map((item) => (
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
