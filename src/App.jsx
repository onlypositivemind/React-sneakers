import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Layout from './components/Layout/Layout';
import AllSneakers from './pages/AllSneakers/AllSneakers';
import Favorites from './pages/Favorites/Favorites';
import Orders from './pages/Orders/Orders';
import NotFound from './pages/NotFound/NotFound';

function App() {
	const [sneakersData, setSneakersData] = useState([]);
	
	useEffect(() => {
		fetch('https://638a04874eccb986e8a12dca.mockapi.io/all-sneakers')
		.then(response => response.json())
		.then(json => setSneakersData(json));
	}, []);
	
	return (
		<>
			<Routes>
				<Route path="/" element={
					<Layout
						sneakersData={sneakersData}
					/>
				}>
					<Route index element={
						<AllSneakers
							sneakersData={sneakersData}
						/>}
					/>
					<Route path="favorites" element={<Favorites />} />
					<Route path="orders" element={<Orders />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
