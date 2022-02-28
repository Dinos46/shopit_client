import Image from 'next/image'
import { FormEvent, useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { onHeaderStyleChange } from '../util/stylesChange'
import { register } from '../controlers/auth.controler'
type Props = {
  state: string
}

const LogisterForm: React.FC<Props> = ({ state }) => {
  const [creds, setCreds] = useState({
    username: '',
    email: '',
    password: '',
  })
  const { email, username, password } = creds

  onHeaderStyleChange('')

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const { name } = e.currentTarget
    const { value } = e.currentTarget
    setCreds((prevCreds) => ({
      ...prevCreds,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await register(email, password, username)
  }

  return (
    <section className=" flex py-2 text-wh">
      <section className="mt-20 flex w-2/5 flex-col items-center p-5">
        <AccountCircleIcon className="mb-2  text-7xl text-blue-300" />
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
          <button>submit</button>
        </form>
      </section>
      <section className="mt-20 hidden w-3/5 md:block">
        <Image
          src="/pic8.jpg"
          alt="login screen image"
          className="h-full w-full object-cover"
          height={500}
          width={600}
          layout="responsive"
        />
      </section>
    </section>
  )
}

export default LogisterForm
