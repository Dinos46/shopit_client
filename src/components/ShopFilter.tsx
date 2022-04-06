import { EvForm, EvInput, IFilterBy } from '../model/IFilterBy'
import FormInput from './FormInput'

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
        <div>
          <label htmlFor="name">filter by name</label>
          <FormInput
            handler={handleChange}
            name={'itemName'}
            placeholder={'search items by name...'}
            type={'text'}
            val={itemName}
            id={'name'}
          />
        </div>
        <div>
          <div>
            <label htmlFor="name">filter by name</label>
            <FormInput
              type={'number'}
              name={'minPrice'}
              placeholder={'set min price'}
              handler={handleChange}
              val={+minPrice}
            />
            <label htmlFor="name">filter by name</label>
            <FormInput
              type={'number'}
              name={'maxPrice'}
              placeholder={'set max price'}
              handler={handleChange}
              val={+maxPrice}
            />
          </div>
          {/* <select onChange={handleChange} name="ctg" ></select>
          <input
            type=""
            name="ctg"
            placeholder="search item by name"
            
            value={ctg}
          /> */}
        </div>
        <button>filter</button>
      </form>
    </section>
  )
}

export default ShopFilter
