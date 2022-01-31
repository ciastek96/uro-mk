import { GraphQLClient } from "graphql-request";

const graphQLClient = new GraphQLClient(process.env.ENDPOINT, {
    headers: {
      Authorization:
        process.env.GRAPH_CMS_TOKEN,
    },
  });

  export default graphQLClient