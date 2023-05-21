import { gql } from '@apollo/client';

export const GET_WINES_QUERY = gql`
	query Wines($filter: WineFilterInput!) {
		wines(filter: $filter) {
			pageNo
			totalPages
			data {
				productId
				name
				rating
				reviewsCount
				brandId
				categoryId
				image
				description
				highlightDescription
				vintage
				producer
				slug
				price
				mrp
				brand {
					brandId
					brandName
				}
				category {
					categoryId
					categoryName
				}
				skus {
					skuId
					size
					color
					mrp
					price
					retailers {
						id
						familyName
						givenName
						address
					}
				}
			}
		}
	}
`;

export const GET_WINE_QUERY = gql`
	query Wine($slug: String!) {
		wine(slug: $slug) {
			productId
			name
			rating
			reviewsCount
			brandId
			categoryId
			image
			description
			highlightDescription
			vintage
			producer
			slug
			price
			mrp
			brand {
				brandId
				brandName
			}
			category {
				categoryId
				categoryName
			}
			skus {
				skuId
				size
				color
				mrp
				price
				retailers {
					id
					familyName
					givenName
					address
				}
			}
		}
	}
`;
