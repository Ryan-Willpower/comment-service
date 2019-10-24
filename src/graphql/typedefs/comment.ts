import { gql } from 'apollo-server'

export default gql`
  type Comment {
    username: String!
    message: String!
    date: String!
  }
`
