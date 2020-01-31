import { gql } from 'apollo-boost';

export const GET_DISPLAY_PRODUCTS = gql`
  {
    products {
      _id
      title
      image
      price
    }
  }
`;

export const GET_DETAIL_PRODUCTS = gql`
  {
    products {
      _id
      title
      description
      image
      price
      count
    }
  }
`;
