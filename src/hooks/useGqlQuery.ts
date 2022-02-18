import { GraphQLClient } from 'graphql-request'
import { useQuery } from 'react-query'
import { IItem } from '../model/item.model'

export const useGqlQuery = (
  key: string,
  query: string,
  variables = {},
  config = {}
) => {
  const endpoin = 'http://localhost:5000/graphql'

  const headers = {
    headers: {
      authorization: `Bearer token goes here`,
    },
  }

  const gqlClient = new GraphQLClient(endpoin, headers)
  // const fetchData = async () => await request(endpoin, query, variables)
  const fetchData = async () => await gqlClient.request(query, variables)

  return useQuery(key, fetchData)
}
