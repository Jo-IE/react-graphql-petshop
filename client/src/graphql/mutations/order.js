import { gql } from 'apollo-boost';

export const CREATE_ORDER = gql`
  mutation createOrder($userInput: UserInput, $orderInput: OrderInput) {
    createOrder(userInput: $userInput, orderInput: $orderInput)
  }
`;
