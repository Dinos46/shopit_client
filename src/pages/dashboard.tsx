import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useAppContext } from '../store/context/UserContext'

const dashboard = () => {
  const { authStore } = useAppContext()
  const router = useRouter()
  useEffect(() => {
    console.log(router)
    if (!authStore.user) {
      router.replace('/')
    }
  }, [])
  return <div>dashboard</div>
}

export default dashboard
