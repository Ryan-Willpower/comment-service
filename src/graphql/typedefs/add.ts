import { gql } from 'apollo-server'

export default gql`
  extend type Mutation {
    add(postid: Int!, message: String!): Result
  }
`
