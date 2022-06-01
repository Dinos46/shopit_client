import axios from 'axios'
import { IHttpRes } from '../model/httpRes.model'
import { auth } from './firebaseService'

// axios.defaults.baseURL = process.env.BASE_URL

const _getFirebaseToken = async () => {
  const token = await auth.currentUser?.getIdToken()
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    return token
  }
  return null
}

export const httpReq = async (query: string, variables: any) => {
  await _getFirebaseToken()
  const queryData = {
    query,
    variables,
  }
  return await axios.post<IHttpRes>('http://localhost:5000/graphql', queryData)
}
