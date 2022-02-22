import Hero from '../components/Hero'
import ItemCategory from '../components/ItemCategory'
import { onHeaderStyleChange } from '../util/stylesChange'

const Home = () => {
  onHeaderStyleChange('header')

  return (
    <div>
      <Hero />
      <ItemCategory />
      {/* TODO sales component with deals */}
    </div>
  )
}

export default Home
