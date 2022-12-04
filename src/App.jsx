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
	const [favoritesItems, setFavoritesItems] = useState([]);
	
	useEffect(() => {
		axios.get('https://638a04874eccb986e8a12dca.mockapi.io/all-sneakers')
		.then(response => setSneakersData(response.data));
		
		axios.get('https://638a04874eccb986e8a12dca.mockapi.io/basket')
		.then(response => setBasketItems(response.data));
		
		axios.get('https://638a04874eccb986e8a12dca.mockapi.io/favorites')
		.then(response => setFavoritesItems(response.data));
	}, []);
	
	const addItemToBasket = async (id) => {
		try {
			if (basketItems.every(item => item.id !== id)) {
				const newItem = sneakersData.find(item => item.id === id);
				const { data } = await axios.post('https://638a04874eccb986e8a12dca.mockapi.io/basket', newItem);
				
				if (data) {
					setBasketItems([...basketItems, newItem]);
					const { data } = await axios.get('https://638a04874eccb986e8a12dca.mockapi.io/basket');
					setBasketItems(data);
				}
			}
		} catch (error) {
			alert('Не удалось добавить в корзину');
		}
	};
	
	const deleteItemFromBasket = async (id) => {
		try {
			const order = basketItems.find(item => item.id === id).order;
			const { data } = await axios.delete(`https://638a04874eccb986e8a12dca.mockapi.io/basket/${order}`);
			
			if (data) {
				setBasketItems(prev => prev.filter(item => item.id !== id));
			}
		} catch (error) {
			alert('Не удалось удалить из корзины');
		}
	};
	
	const addItemToFavorite = async (id) => {
		try {
			if (favoritesItems.every(item => item.id !== id)) {
				const newItem = sneakersData.find(item => item.id === id);
				const { data } = await axios.post('https://638a04874eccb986e8a12dca.mockapi.io/favorites', newItem);
				
				if (data) {
					setFavoritesItems([...favoritesItems, newItem]);
					const { data } = await axios.get('https://638a04874eccb986e8a12dca.mockapi.io/favorites');
					setFavoritesItems(data);
				}
			}
		} catch (error) {
			alert('Не удалось добавить в избранное');
		}
	};
	
	const deleteItemFromFavorite = async (id) => {
		try {
			const order = favoritesItems.find(item => item.id === id).order;
			const { data } = await axios.delete(`https://638a04874eccb986e8a12dca.mockapi.io/favorites/${order}`);
			
			if (data) {
				setFavoritesItems(prev => prev.filter(item => item.id !== id));
			}
		} catch (error) {
			alert('Не удалось удалить из избранного');
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
							deleteItemFromBasket={deleteItemFromBasket}
							addItemToFavorite={addItemToFavorite}
							deleteItemFromFavorite={deleteItemFromFavorite}
						/>}
					/>
					<Route path="favorites" element={
						<Favorites
							favoritesItems={favoritesItems}
							addItemToBasket={addItemToBasket}
							deleteItemFromBasket={deleteItemFromBasket}
							deleteItemFromFavorite={deleteItemFromFavorite}
						/>}
					/>
					<Route path="orders" element={<Orders />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
