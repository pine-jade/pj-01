import { useLoaderData } from 'react-router';

export function DashboardView() {
	const data = useLoaderData() as {
		stats: number[];
		summary: string;
	};

	const data1 = {
		stats: 1,
		summary: 'text',
	};

	return (
		<section>
			<h1>Dashboard</h1>
			<p>{data1.stats}</p>
			<p>{data1.summary}</p>
			<p>자동 배포 테스트</p>
		</section>
	);
}
