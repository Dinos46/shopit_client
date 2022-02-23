import { GraphQLClient } from 'graphql-request'
import { useQuery } from 'react-query'
import { devConfig } from '../../config/dev.config'

export const useGqlQuery = (
  key: string,
  query: string,
  variables = {},
  config = {}
) => {
  // const endpoin = process.env.BASE_URL as string
  const endpoin = devConfig.baseUrl
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
