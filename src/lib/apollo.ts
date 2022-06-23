import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4qdq1re3kpd01xn4eb8hjp3/master',
  cache: new InMemoryCache()
})