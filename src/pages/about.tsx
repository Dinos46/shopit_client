import { useStylesChange } from '../hooks/useStylesChange'
import { useUserAuthStateChange } from '../hooks/useUserAuthStateChange'

const about = () => {
  useStylesChange('')
  useUserAuthStateChange()

  return <div>about</div>
}

export default about
