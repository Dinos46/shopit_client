import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../services/firebaseService'
import { useEffect } from 'react'
import { useAppContext } from '../store/context/UserContext'

export const useUserAuthStateChange = () => {
  const { authStore } = useAppContext()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user?.email) {
        console.log('USER')
        // await authStore.logInUser(user?.email)
      }
      if (!user) {
        console.log('NO_USER')
        authStore.user = undefined
      }
    })
    return unsubscribe
  }, [])
}
