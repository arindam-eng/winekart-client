import { gql } from '@apollo/client';

export const GET_WINE_CAT_QUERY = gql`
	query Categories {
		categories {
			categoryId
			categoryName
			image
		}
	}
`;
