// example query
import { gql } from 'apollo-server'

export default gql`
  extend type Query {
    hello: String!
  }
`
