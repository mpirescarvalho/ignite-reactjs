import { useEffect } from 'react';
import { Can } from '../components/Can';
import { useAuth } from '../contexts/AuthContext';
import { useCan } from '../hooks/useCan';
import { setupApiClient } from '../services/api';
import { api } from '../services/apiClient';
import { withSSRAuth } from '../utils/withSSRAuth';

export default function Dashboard() {
	const { user, signOut } = useAuth();

	const userCanSeeMetrics = useCan({
		permissions: ['metrics.list'],
	});

	useEffect(() => {
		api.get('/me').then(console.log).catch(console.log);
	}, []);

	return (
		<div>
			<button onClick={signOut}>Sign out</button>

			<h1>Dashboard: {user?.email}</h1>

			{userCanSeeMetrics && <h2>Metrics</h2>}

			<Can roles={['editor']}>
				<h3>Article</h3>
			</Can>
		</div>
	);
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
	const apiClient = setupApiClient(ctx);
	const response = await apiClient.get('/me');

	console.log(response.data);

	return {
		props: {},
	};
});
