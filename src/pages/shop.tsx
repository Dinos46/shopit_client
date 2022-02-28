import { observer } from 'mobx-react'
import { useContext } from 'react'
import { queryAllItems } from '../controlers/item.controler'
import { IItem } from '../model/item.model'
import { RootContext } from '../store/context/UserContext'
import { onHeaderStyleChange } from '../util/stylesChange'

type Props = {
  items: IItem[]
}

const shop: React.FC<Props> = ({ items }) => {
  const { itemStore } = useContext(RootContext)
  itemStore.setItems(items)
  onHeaderStyleChange('')

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
