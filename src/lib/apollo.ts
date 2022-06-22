import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oqd7gr0ort01xxhmbj1dj8/master',
    cache: new InMemoryCache()
})