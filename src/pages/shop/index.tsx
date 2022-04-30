import { observer } from 'mobx-react'
import { GetServerSideProps } from 'next'
import { useCallback, useState, useEffect } from 'react'
import { ItemFilter, ItemCard } from '../../components'
import HeadInfo from '../../components/HeadInfo'
import { queryAllItems } from '../../controlers/item.controler'
import { useStylesChange } from '../../hooks/useStylesChange'
import { useUserAuthStateChange } from '../../hooks/useUserAuthStateChange'
import { EvForm, EvInput } from '../../model/IFilterBy'
import { IItem } from '../../model/item.model'
import { useAppContext } from '../../store/context/UserContext'
import { rootStore } from '../../store/RootStore'

type Props = {
  items: IItem[]
}

const shop: React.FC<Props> = ({ items }) => {
  const { itemStore } = useAppContext()

  useStylesChange('')
  useUserAuthStateChange()

  useEffect(() => {
    itemStore.setItems(items)
  }, [items])

  const [filter, setFilter] = useState({
    name: '',
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
    [filter]
  )

  const handleSubmit = useCallback(
    async (ev: EvForm) => {
      ev.preventDefault()
      const filterBy = {
        ...filter,
        minPrice: +filter.minPrice,
        maxPrice: +filter.maxPrice,
      }
      await itemStore.getFilteredItems(filterBy)
    },
    [filter]
  )

  if (itemStore.isLoading) return <p>Loading...</p>
  if (!itemStore.items) return <p>no items...</p>

  return (
    <section className="pt-36">
      <HeadInfo des={'store items collection'} title={'shop'} />
      <ItemFilter
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        filter={filter}
      />
      <section className="grid grid-cols-auto-fit gap-6">
        {itemStore?.items?.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </section>
    </section>
  )
}

export default observer(shop)

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await queryAllItems()
  const { itemStore } = rootStore
  itemStore.setItems(data?.items)
  return {
    props: {
      items: itemStore.items,
    },
  }
}
