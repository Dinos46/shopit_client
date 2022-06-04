import { LogisterForm } from '../components'
import HeadInfo from '../components/HeadInfo'

const Login = () => {
  return (
    <>
      <HeadInfo des={'login page for users'} title={'LogIn'} />
      <LogisterForm state={'login'} />
    </>
  )
}

export default Login
