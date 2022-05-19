import Image from 'next/image'
import { FormEvent, useCallback, useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { useAppContext } from '../store/context/UserContext'
import { observer } from 'mobx-react'
import { useRouter } from 'next/router'
import { useStylesChange } from '../hooks/useStylesChange'
import { useUserAuthStateChange } from '../hooks/useUserAuthStateChange'
import { EvInput, EvForm } from '../model/filterBy.model'
type Props = {
  state: string
}

const LogisterForm: React.FC<Props> = ({ state }) => {
  const { pathname } = useRouter()

  const { authStore } = useAppContext()
  const [creds, setCreds] = useState({
    username: '',
    email: '',
    password: '',
  })
  const { email, username, password } = creds

  useStylesChange('')
  // useUserAuthStateChange()

  const handleChange = useCallback(
    (ev: EvInput) => {
      const { name } = ev.currentTarget
      const { value } = ev.currentTarget
      setCreds((prevCreds) => ({
        ...prevCreds,
        [name]: value,
      }))
      console.debug('HANDLE', email, password, username)
    },
    [creds]
  )

  const handleSubmit = useCallback(
    async (ev: EvForm) => {
      ev.preventDefault()
      console.debug('FORM', email, password, username)
      if (!email && !password) return
      pathname === '/register'
        ? authStore.createUser(email, password, username)
        : authStore.logInUser(email, password)
    },
    [creds]
  )

  return (
    <section className="flex h-screen py-2 pt-28 text-wh">
      <section className=" flex w-1/3 flex-col items-center p-5">
        <AccountCircleIcon className="mb-2  text-7xl text-blue-300" />
        {authStore.user && JSON.stringify(authStore.user, null, 2)}
        <h1 className="mb-4  font-pop text-2xl capitalize">{state}</h1>
        <form onSubmit={handleSubmit} className="flex w-full  flex-col">
          {state === 'register' && (
            <input
              type="text"
              name="username"
              placeholder="username..."
              value={username}
              onChange={handleChange}
              className="form-input"
            />
          )}
          <input
            type="text"
            name="email"
            placeholder="email..."
            value={email}
            onChange={handleChange}
            className="form-input"
          />
          <input
            type="text"
            name="password"
            placeholder="password..."
            value={password}
            onChange={handleChange}
            className="form-input"
          />
          <button disabled={authStore.isLoading}>submit</button>
        </form>
      </section>
      <section className=" hidden w-2/3 md:block">
        <Image
          priority
          src="/pic9.jpg"
          alt="login screen image"
          height={500}
          width={500}
          layout="responsive"
          objectFit="cover"
        />
      </section>
    </section>
  )
}

export default observer(LogisterForm)
