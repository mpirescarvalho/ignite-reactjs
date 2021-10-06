import { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { api } from '../services/api';

export default function Dashboard() {
	const { user } = useAuth();

	useEffect(() => {
		api.get('/me').then(console.log).catch(console.log);
	}, []);

	return <h1>Dashboard: {user?.email}</h1>;
}
