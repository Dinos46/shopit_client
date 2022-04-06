import { LogisterForm } from '../components'
import HeadInfo from '../components/HeadInfo'

const login = () => {
  return (
    <>
      <HeadInfo des={'login page for users'} title={'LogIn'} />
      <LogisterForm state={'login'} />
    </>
  )
}

export default login
