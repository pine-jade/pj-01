import type { Route } from './+types/dashboard';
import { DashboardView } from '../features/dashboard/dashboardView';

export function meta({}: Route.MetaArgs) {
	return [
		{ title: '대시보드' },
		{ name: 'description', content: 'Welcome to React Router!' },
	];
}

export default function DashboardPage() {
	return <DashboardView />;
}
