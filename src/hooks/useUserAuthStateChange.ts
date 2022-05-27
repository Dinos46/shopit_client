import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../services/firebaseService'
import { useEffect } from 'react'
import { useAppContext } from '../store/context/UserContext'
import { getLogedInUser } from '../controlers/auth.controler'

export const useUserAuthStateChange = () => {
  const { authStore } = useAppContext()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user?.email) {
        const dbUser = await getLogedInUser(user.email)
        console.log('USER', dbUser)

        authStore.setUser(dbUser)
      }
      if (!user) {
        console.log('NO_USER')
        authStore.user = null
      }
    })
    return unsubscribe
  }, [])
}
