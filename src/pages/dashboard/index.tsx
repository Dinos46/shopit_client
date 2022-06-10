import { observer } from 'mobx-react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { DashboardLayout } from '../../components'
import HeadInfo from '../../components/Global/HeadInfo'
import { useStylesChange } from '../../hooks/useStylesChange'
import { useAppContext } from '../../store/context/UserContext'

const Dashboard = () => {
  // const { authStore } = useAppContext()
  // const router = useRouter()
  useStylesChange('')
  // useEffect(() => {
  //   if (!authStore.user) {
  //     router.replace('/')
  //   }
  //   console.log('first')
  // }, [authStore.user])

  return (
    <section className="">
      <HeadInfo
        des={'dashboard page for this fake online store'}
        title={'Dashboard'}
      />
      <section>
        {/* <Image /> */}
        <p>user name</p>
      </section>
    </section>
  )
}
Dashboard.PageLayout = DashboardLayout
export default observer(Dashboard)
