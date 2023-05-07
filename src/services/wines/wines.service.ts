import { getClient } from '@/app/apolloClient';
import { GET_WINES_QUERY } from './wines.gql';

async function fetchWines(filter: Record<string, any>) {
	try {
		const client = getClient();
		const { data } = await client.query({
			query: GET_WINES_QUERY,
			variables: {
				filter: filter || {},
			},
		});
		return data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

export { fetchWines };
