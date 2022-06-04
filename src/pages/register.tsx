import { LogisterForm } from '../components'
import HeadInfo from '../components/HeadInfo'

const Register = () => {
  return (
    <>
      <HeadInfo des={'register page for users'} title={'Register'} />
      <LogisterForm state={'register'} />
    </>
  )
}

export default Register
