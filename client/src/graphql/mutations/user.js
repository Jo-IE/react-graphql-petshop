import { gql } from 'apollo-boost';

export const CREATE_USER = gql`
  mutation createUser($email: String!, $address: String!) {
    createUser(email: $email, address: $address) {
      email
      address
    }
  }
`;
