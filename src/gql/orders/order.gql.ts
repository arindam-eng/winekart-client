import { gql } from '@apollo/client';

export const ADD_ITEM_TO_ORDER = gql`
	mutation AddItemToOrder($addItemInput: AddItemOrderInput!) {
		addItemToOrder(addItemInput: $addItemInput) {
			orderId
			cartItemCount
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

export const ORDER_CHECKOUT = gql`
	mutation CheckoutSesionForAOrder2 {
		checkoutSesionForAOrder {
			sessionUrl
			publicKey
		}
	}
`;

export const ORDER_HISTORY = gql`
	mutation ConfirmOrders($skip: Int, $limit: Int) {
		confirmOrders(confirmOrders: { skip: $skip, limit: $limit }) {
			orderId
			cartItemCount
			items
			paymentDetails {
				method
				updatedAt
			}
			# retailer {
			# 	familyName
			# 	givenName
			# 	id
			# }
			costDetails {
				grossAmount
				subTotalAmount
				shippingCost
				discountAmount
				tax
			}
			status
		}
	}
`;
