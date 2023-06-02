import { gql } from '@apollo/client';

export const GET_WINE_BRAND_QUERY = gql`
	query Brands {
		brands {
			brandId
			brandName
			image
		}
	}
`;
