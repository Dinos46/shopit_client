import Link from 'next/link'
import React from 'react'
import { IUser } from '../../model/user.model'

type Props = {
  user: IUser | null | undefined
  onLogOut: () => void
}

const UserMenu: React.FC<Props> = ({ onLogOut, user }) => {
  return (
    <>
      {user ? (
        <ul className="user-links">
          <li className="mb-2">
            <button onClick={onLogOut}>logout</button>
          </li>
          <li>
            <Link href="/dashboard">dashboard</Link>
          </li>
        </ul>
      ) : (
        <ul className="user-links">
          <li className="mb-2">
            <Link href="/register">register</Link>
          </li>
          <li>
            <Link href="/login">login</Link>
          </li>
        </ul>
      )}
    </>
  )
}

export default UserMenu
