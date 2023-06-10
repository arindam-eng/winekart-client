import {
	ApolloClient,
	InMemoryCache,
	ApolloLink,
	createHttpLink,
} from '@apollo/client';

export const getClient = () => {
	const httpLink = createHttpLink({ uri: 'https://api-winekart.arindampauleng.site' });

	const authLink = new ApolloLink((operation, forward) => {
		// Retrieve the bearer token from local storage
		const token = localStorage.getItem('wine_token');

		// Add the bearer token to the headers
		operation.setContext(
			({ headers }: { headers: Record<string, string> }) => ({
				headers: {
					...headers,
					Authorization: token ? `Bearer ${token}` : '',
				},
			})
		);

		return forward(operation);
	});

	const apolloClient = new ApolloClient({
		link: authLink.concat(httpLink),
		cache: new InMemoryCache(),
	});

	return apolloClient;
};
