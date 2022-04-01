import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../pages/_app'
import { useAppContext } from '../store/context/UserContext'

export const useUserAuthStateChange = () => {
  const { authStore } = useAppContext()
  onAuthStateChanged(auth, (user) => {
    console.log('USER', user)
  })
  return { user: authStore.user }
}
