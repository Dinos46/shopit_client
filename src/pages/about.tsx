//COMPONENTS HOOKS TYPES
import { HeadInfo } from '../components'
import { useStylesChange } from '../hooks/useStylesChange'
import { useUserAuthStateChange } from '../hooks/useUserAuthStateChange'

const About = () => {
  useStylesChange('')
  useUserAuthStateChange()

  return (
    <div>
      <HeadInfo des={'about page for this fake online store'} title={'About'} />
    </div>
  )
}

export default About
