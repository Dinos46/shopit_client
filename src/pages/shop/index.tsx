//REAXT-NEXT
import { GetServerSideProps } from 'next'
import { useCallback, useState, useEffect } from 'react'
//API-CONTROLLER
import { queryAllItems } from '../../controlers/item.controler'
//APP STATE
import { observer } from 'mobx-react'
import { useAppContext } from '../../store/context/UserContext'
import { rootStore } from '../../store/RootStore'
//COMPONENTS HOOKS TYPES
import { useStylesChange } from '../../hooks/useStylesChange'
import { useUserAuthStateChange } from '../../hooks/useUserAuthStateChange'
import { EvForm, EvInput } from '../../model/filterBy.model'
import { IItem } from '../../model/item.model'
import { HeadInfo, ItemCard, ItemFilter } from '../../components'

type Props = {
  items: IItem[]
}

const Shop: React.FC<Props> = ({ items }) => {
  if (!items) return <h1>no items</h1>
  const { itemStore } = useAppContext()

  useStylesChange('')
  useUserAuthStateChange()

  useEffect(() => {
    itemStore.setItems(items)
  }, [items, itemStore])

  const [filter, setFilter] = useState({
    name: '',
    minPrice: 0,
    maxPrice: 0,
    ctg: '',
  })

  const handleChange = useCallback((ev: EvInput) => {
    const { name } = ev.currentTarget
    const { value } = ev.currentTarget
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }))
  }, [])

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

  const resetFilter = useCallback(async () => {
    await itemStore.getFilteredItems()
    setFilter({
      name: '',
      minPrice: 0,
      maxPrice: 0,
      ctg: '',
    })
  }, [])

  if (itemStore.isLoading) return <p>Loading...</p>
  if (!itemStore.items) return <p>no items...</p>

  return (
    <section className="pt-36">
      <HeadInfo des={'store items collection'} title={'shop'} />
      <ItemFilter
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        resetFilter={resetFilter}
        filter={filter}
      />
      <section className="mb-5 grid grid-cols-auto-fit gap-5">
        {itemStore?.items?.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </section>
    </section>
  )
}

export default observer(Shop)

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { itemStore } = rootStore
  if (ctx.query.ctg) {
    const data = await queryAllItems({ ctg: ctx.query.ctg })
    if (data) {
      itemStore.setItems(data)
    }

    return {
      props: {
        items: data || null,
      },
    }
  }

  const data = await queryAllItems()
  if (data) {
    itemStore.setItems(data)
  }
  return {
    props: {
      items: data || null,
    },
  }
}
