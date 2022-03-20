import { Hero, ItemCategory } from '../components'
import { useStylesChange } from '../hooks/useStylesChange'

const Home = () => {
  useStylesChange('header')
  console.log('ENV', process.env.NODE_ENV)
  return (
    <div className="h-full">
      <Hero />
      <ItemCategory />
      {/* TODO sales component with deals */}
    </div>
  )
}

export default Home
