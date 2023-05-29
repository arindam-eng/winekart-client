import { gql } from "@apollo/client";

export const ADD_ITEM_TO_ORDER = gql`
  mutation AddItemToOrder($addItemInput: AddItemOrderInput!) {
    addItemToOrder(addItemInput: $addItemInput) {
      orderId,
      cartItemCount,
      items
    }
  }
`;

export const GET_OPEN_ORDER = gql`
  query GetOpenOrder {
    getOpenOrder {
      orderId
      cartItemCount
      items
    }
  }
`;
