import { request } from 'graphql-request'
import { useQuery, UseQueryResult } from 'react-query'
import { IItem } from '../model/item.model'

export const useGqlQuery = (
  key: string,
  query: string,
  variables = {},
  config = {}
) => {
  const endpoin = 'http://localhost:5000/graphql'
  const fetchData = async () => await request(endpoin, query, variables)

  return useQuery(key, fetchData)
}
