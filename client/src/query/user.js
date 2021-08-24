import { gql } from '@apollo/client'

export const GET_ALL_USERS = gql`
  query {
    getAllUsers {
      id
      username
      age
    }
  }
`

export const GET_USER = gql`
  query ($id: UserInput) {
    getUser(id: $id) {
      id
      username
      age
    }
  }
`
