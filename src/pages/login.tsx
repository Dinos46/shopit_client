//COMPONENTS HOOKS TYPES
import { HeadInfo, LogisterForm } from '../components'

const Login = () => {
  return (
    <>
      <HeadInfo des={'login page for users'} title={'LogIn'} />
      <LogisterForm state={'login'} />
    </>
  )
}

export default Login
