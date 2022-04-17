import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../services/firebaseService'
import { useEffect } from 'react'
import { useAppContext } from '../store/context/UserContext'

export const useUserAuthStateChange = () => {
  const { authStore } = useAppContext()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user?.email) {
        await authStore.getUserData(user?.email)
      }
    })
    return unsubscribe
  }, [])
}
