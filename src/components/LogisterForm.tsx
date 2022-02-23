import Image from 'next/image'
import { FormEvent, useEffect, useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { onHeaderStyleChange } from '../util/stylesChange'

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(creds)
  }

  return (
    <section className="mt-3 flex py-2 text-wh">
      <section className="w-2/5 p-5">
        <AccountCircleIcon className="text-8xl" />
        <h1 className="text-4xl">{state}</h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          {state === 'register' && (
            <input
              type="text"
              name="username"
              placeholder="username..."
              value={username}
              onChange={handleChange}
            />
          )}
          <input
            type="text"
            name="email"
            placeholder="email..."
            value={email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="password"
            placeholder="password..."
            value={password}
            onChange={handleChange}
            className=""
          />
          <button>submit</button>
        </form>
      </section>
      <section className="relative flex-1">
        <Image
          src={'/pic33.jpg'}
          priority
          layout="responsive"
          objectFit="cover"
          objectPosition={'center center'}
          height={30}
          width={50}
          alt="login pic"
        />
      </section>
    </section>
  )
}

export default LogisterForm
