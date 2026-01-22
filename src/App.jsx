import { Routes, Route } from 'react-router';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function ViteApp() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<a href='https://vite.dev' target='_blank'>
					<img src={viteLogo} className='logo' alt='Vite logo' />
				</a>
				<a href='https://react.dev' target='_blank'>
					<img src={reactLogo} className='logo react' alt='React logo' />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className='card'>
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className='read-the-docs'>
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

function App() {
	return (
		<Routes>
			<Route index element={<ViteApp />} />
			<Route path='dashboard' element={<div>Dashboard</div>} />

			{/* <Route element={<AuthLayout />}>
				<Route path='login' element={<Login />} />
				<Route path='register' element={<Register />} />
			</Route>

			<Route path='concerts'>
				<Route index element={<ConcertsHome />} />
				<Route path=':city' element={<City />} />
				<Route path='trending' element={<Trending />} />
			</Route> */}
		</Routes>
	);
}

export default App;
