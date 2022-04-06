import { EvForm, EvInput, IFilterBy } from '../model/IFilterBy'

type Props = {
  handleChange: (ev: EvInput) => void
  handleSubmit: (ev: EvForm) => void
  filter: IFilterBy
}

const ShopFilter: React.FC<Props> = ({
  handleSubmit,
  handleChange,
  filter,
}) => {
  const { ctg, itemName, maxPrice, minPrice } = filter

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="itemName"
          placeholder="search item by name"
          onChange={handleChange}
          value={itemName}
        />
        <input
          type="number"
          name="minPrice"
          placeholder="set min price"
          onChange={handleChange}
          value={minPrice}
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="set max price"
          onChange={handleChange}
          value={maxPrice}
        />
        <input
          type="text"
          name="ctg"
          placeholder="search item by name"
          onChange={handleChange}
          value={ctg}
        />
        <button>filter</button>
      </form>
    </section>
  )
}

export default ShopFilter
