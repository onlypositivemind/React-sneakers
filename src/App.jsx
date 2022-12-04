import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from './components/Layout/Layout';
import AllSneakers from './pages/AllSneakers/AllSneakers';
import Favorites from './pages/Favorites/Favorites';
import Orders from './pages/Orders/Orders';
import NotFound from './pages/NotFound/NotFound';

function App() {
	const [sneakersData, setSneakersData] = useState([]);
	const [basketItems, setBasketItems] = useState([]);
	
	useEffect(() => {
		axios.get('https://638a04874eccb986e8a12dca.mockapi.io/all-sneakers')
		.then(response => setSneakersData(response.data));
		
		axios.get('https://638a04874eccb986e8a12dca.mockapi.io/basket')
		.then(response => setBasketItems(response.data));
	}, []);
	
	const addItemToBasket = async (id) => {
		if (basketItems.every(item => item.id !== id)) {
			const newItem = sneakersData.find(item => item.id === id);
			const response = await axios.post('https://638a04874eccb986e8a12dca.mockapi.io/basket', newItem);
			
			if (response.data) {
				setBasketItems([...basketItems, newItem]);
				axios.get('https://638a04874eccb986e8a12dca.mockapi.io/basket')
				.then(response => setBasketItems(response.data));
			}
		}
	};
	
	const deleteItemFromBasket = async (id) => {
		const order = basketItems.find(item => item.id === id).order;
		const response = await axios.delete(`https://638a04874eccb986e8a12dca.mockapi.io/basket/${order}`);
		
		if (response.data) {
			setBasketItems(prev => prev.filter(item => item.id !== id));
		}
	};
	
	return (
		<>
			<Routes>
				<Route path="/" element={
					<Layout
						sneakersData={sneakersData}
						basketItems={basketItems}
						deleteItemFromBasket={deleteItemFromBasket}
					/>}
				>
					<Route index element={
						<AllSneakers
							sneakersData={sneakersData}
							addItemToBasket={addItemToBasket}
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
