import { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { setupApiClient } from '../services/api';
import { api } from '../services/apiClient';
import { withSSRAuth } from '../utils/withSSRAuth';

export default function Dashboard() {
	const { user } = useAuth();

	useEffect(() => {
		api.get('/me').then(console.log).catch(console.log);
	}, []);

	return <h1>Dashboard: {user?.email}</h1>;
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
	const apiClient = setupApiClient(ctx);
	const response = await apiClient.get('/me');

	console.log(response.data);

	return {
		props: {},
	};
});
