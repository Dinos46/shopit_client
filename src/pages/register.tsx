//COMPONENTS HOOKS TYPES
import { HeadInfo, LogisterForm } from '../components'

const Register = () => {
  return (
    <>
      <HeadInfo des={'register page for users'} title={'Register'} />
      <LogisterForm state={'register'} />
    </>
  )
}

export default Register
