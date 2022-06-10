import { observer } from 'mobx-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode, useEffect } from 'react'
import { useAppContext } from '../../store/context/UserContext'

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  // const { authStore } = useAppContext()
  // const router = useRouter()

  // useEffect(() => {
  //   if (!authStore.user) {
  //     router.replace('/')
  //   }
  //   console.log('first')
  // }, [authStore.user])
  return (
    <section className="grid grid-cols-dashboard-grid pt-[85px]">
      <aside className=" aside">
        <ul className="flex w-full flex-col items-center">
          <li className="dashboard-aside-link mt-5">
            <Link href="/dashboard">dashboard</Link>
          </li>
          <li className="dashboard-aside-link">
            <Link href="/dashboard/profile" as="/profile">
              profile
            </Link>
          </li>
          <li className="dashboard-aside-link">
            <Link href="/dashboard/orders" as="/my-orders">
              my orders
            </Link>
          </li>
          <li className="dashboard-aside-link">
            <Link href="/dashboard/reviews" as="/my-reviews">
              my reviews
            </Link>
          </li>
        </ul>
      </aside>
      <section>{children}</section>
    </section>
  )
}

export default observer(DashboardLayout)
