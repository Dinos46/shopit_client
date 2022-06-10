//COMPONENTS HOOKS TYPES
import { HeadInfo, Hero, ItemCategory } from '../components'
import { useStylesChange } from '../hooks/useStylesChange'
import { useUserAuthStateChange } from '../hooks/useUserAuthStateChange'

const Home = () => {
  useStylesChange('header')
  useUserAuthStateChange()
  return (
    <div className="h-full">
      <HeadInfo des={'home page for ShopIt online fake store'} title={'Home'} />
      <Hero />
      <ItemCategory />
      {/* TODO sales component with deals */}
    </div>
  )
}

export default Home
