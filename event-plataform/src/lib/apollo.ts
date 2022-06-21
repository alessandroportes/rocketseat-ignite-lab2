import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4oi5dhq04p901ywh4up29rf/master",
  cache: new InMemoryCache(),
});
