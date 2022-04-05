import { Hero, ItemCategory } from '../components'
import { useStylesChange } from '../hooks/useStylesChange'
import { useUserAuthStateChange } from '../hooks/useUserAuthStateChange'

const Home = () => {
  useStylesChange('header')
  useUserAuthStateChange()
  return (
    <div className="h-full">
      <Hero />
      <ItemCategory />
      {/* TODO sales component with deals */}
    </div>
  )
}

export default Home
