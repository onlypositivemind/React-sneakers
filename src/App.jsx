import { Route, Routes } from 'react-router-dom';
import { useEffect, useState, } from 'react';
import axios from 'axios';
import Layout from './components/Layout/Layout';
import AllSneakers from './pages/AllSneakers/AllSneakers';
import Favorites from './pages/Favorites/Favorites';
import Orders from './pages/Orders/Orders';
import NotFound from './pages/NotFound/NotFound';
import BasketItemsContext from './basket-items-context';

const mainURL = 'https://638a04874eccb986e8a12dca.mockapi.io';
const allSneakersURL = `${mainURL}/all-sneakers`;
const basketURL = `${mainURL}/basket`;
const favoritesURL = `${mainURL}/favorites`;
const ordersURL = `${mainURL}/orders`;

const App = () => {
	const [sneakersData, setSneakersData] = useState([]);
	const [basketItems, setBasketItems] = useState([]);
	const [favoritesItems, setFavoritesItems] = useState([]);
	const [ordersItems, setOrdersItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	
	useEffect(() => {
		const fetchData = async () => {
			try {
				const [allItemsRes, basketItemsRes, favItemsRes, ordersItemsRes] = await Promise.all([
					axios.get(allSneakersURL),
					axios.get(basketURL),
					axios.get(favoritesURL),
					axios.get(ordersURL),
				]);
				
				setBasketItems(basketItemsRes.data);
				setFavoritesItems(favItemsRes.data);
				setOrdersItems(ordersItemsRes.data);
				setSneakersData(allItemsRes.data);
			} catch (error) {
				alert('Не удалось загрузить данные');
			}
			setIsLoading(false);
		};
		fetchData();
	}, []);
	
	const addItemToBasket = async (id) => {
		try {
			if (basketItems.every(item => item.id !== id)) {
				const newItem = sneakersData.find(item => item.id === id);
				const { data } = await axios.post(basketURL, newItem);
				
				if (data) {
					setBasketItems([...basketItems, newItem]);
					const { data } = await axios.get(basketURL);
					setBasketItems(data);
				}
			}
		} catch (error) {
			alert('Не удалось добавить в корзину');
		}
	};
	
	const deleteItemFromBasket = async (id) => {
		try {
			const route = basketItems.find(item => item.id === id).route;
			const { data } = await axios.delete(`${basketURL}/${route}`);
			
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
				const { data } = await axios.post(favoritesURL, newItem);
				
				if (data) {
					setFavoritesItems([...favoritesItems, newItem]);
					const { data } = await axios.get(favoritesURL);
					setFavoritesItems(data);
				}
			}
		} catch (error) {
			alert('Не удалось добавить в избранное');
		}
	};
	
	const deleteItemFromFavorite = async (id) => {
		try {
			const route = favoritesItems.find(item => item.id === id).route;
			setFavoritesItems(prev => prev.filter(item => item.id !== id));
			
			await axios.delete(`${favoritesURL}/${route}`);
		} catch (error) {
			alert('Не удалось удалить из избранного');
		}
	};
	
	const totalPrice = () => basketItems.reduce((acc, obj) => acc + obj['price'], 0);
	
	const isItemInBasket = (id) => basketItems.find(obj => obj.id === id) && true;
	
	return (
		<Routes>
			<Route path="/" element={
				<Layout
					sneakersData={sneakersData}
					favoritesItems={favoritesItems}
					basketItems={basketItems}
					setBasketItems={setBasketItems}
					deleteItemFromBasket={deleteItemFromBasket}
					basketURL={basketURL}
					ordersURL={ordersURL}
					setOrdersItems={setOrdersItems}
					totalPrice={totalPrice}
				/>}
			>
				<Route index element={
					<BasketItemsContext.Provider value={{ isItemInBasket }}>
						
						<AllSneakers
							sneakersData={sneakersData}
							favoritesItems={favoritesItems}
							addItemToBasket={addItemToBasket}
							deleteItemFromBasket={deleteItemFromBasket}
							addItemToFavorite={addItemToFavorite}
							deleteItemFromFavorite={deleteItemFromFavorite}
							isLoading={isLoading}
						/>
					
					</BasketItemsContext.Provider>
				}
				/>
				<Route path="favorites" element={
					<BasketItemsContext.Provider value={{ isItemInBasket }}>
						
						<Favorites
							favoritesItems={favoritesItems}
							addItemToBasket={addItemToBasket}
							deleteItemFromBasket={deleteItemFromBasket}
							deleteItemFromFavorite={deleteItemFromFavorite}
							isLoading={isLoading}
						/>
					
					</BasketItemsContext.Provider>
				}
				/>
				<Route path="orders" element={
					<Orders
						ordersItems={ordersItems}
						isLoading={isLoading}
					/>}
				/>
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
};

export default App;
