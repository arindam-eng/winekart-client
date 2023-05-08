'use client';
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { getClient } from './apolloClient';

export const ApolloProviders = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const client = getClient();
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
