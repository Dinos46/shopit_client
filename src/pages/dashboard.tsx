import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import HeadInfo from '../components/HeadInfo'
import { useAppContext } from '../store/context/UserContext'

const dashboard = () => {
  const { authStore } = useAppContext()
  const router = useRouter()

  useEffect(() => {
    if (!authStore.user) {
      router.replace('/')
    }
  }, [])

  return (
    <div>
      <HeadInfo
        des={'dashboard page for this fake online store'}
        title={'Dashboard'}
      />
      dashboard
    </div>
  )
}

export default dashboard
