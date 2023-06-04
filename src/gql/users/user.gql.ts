import { gql } from '@apollo/client';

export const GET_USER = gql`
	query User {
		user(id: null) {
			_id
			familyName
			givenName
			email
			picture
      phoneNumber
      dialingCode
		}
	}
`;
