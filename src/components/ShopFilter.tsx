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
    <section className="mb-3 rounded-md p-2">
      <form className="flex flex-col items-center p-1" onSubmit={handleSubmit}>
        <div className="w-[68%]">
          <FormInput
            handler={handleChange}
            name={'itemName'}
            placeholder={'search items by name...'}
            type={'text'}
            val={itemName}
            id={'name'}
            style="filter-input w-full mb-2"
          />
        </div>

        <div className="flex flex-row p-1">
          <div>
            <label className="filter-label" htmlFor="name">
              set min price
            </label>
            <FormInput
              type={'number'}
              name={'minPrice'}
              placeholder={'set min price'}
              handler={handleChange}
              val={+minPrice}
              style="filter-input mr-2 w-1/6"
            />
            <label className="filter-label" htmlFor="name">
              set max price
            </label>
            <FormInput
              type={'number'}
              name={'maxPrice'}
              placeholder={'set max price'}
              handler={handleChange}
              val={+maxPrice}
              style="filter-input mr-2 w-1/6"
            />
          </div>
          {/* <select onChange={handleChange} name="ctg" ></select>
          <input
          type=""
            name="ctg"
            placeholder="search item by name"
            
            value={ctg}
          /> */}
          <button className="filter-btn">filter</button>
        </div>
      </form>
    </section>
  )
}

export default ShopFilter
