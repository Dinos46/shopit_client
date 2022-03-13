import { observer } from 'mobx-react'
import { queryAllItems } from '../controlers/item.controler'
import { useStylesChange } from '../hooks/useStylesChange'
import { IItem } from '../model/item.model'
import { useAppContext } from '../store/context/UserContext'

type Props = {
  items: IItem[]
}

const shop: React.FC<Props> = ({ items }) => {
  const { itemStore } = useAppContext()
  itemStore.setItems(items)
  useStylesChange('')

  return <pre>{JSON.stringify(items, null, 2)}</pre>
}

export default observer(shop)

export const getServerSideProps = async () => {
  const items = await queryAllItems()

  return {
    props: {
      items,
    },
  }
}
