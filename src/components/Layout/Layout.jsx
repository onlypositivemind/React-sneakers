import { NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';
import Basket from '../Basket/Basket';
import Logo from '../../shared/images/logo.png';
import BasketSVG from '../../shared/images/icons/basket.svg';
import HeartSVG from '../../shared/images/icons/heart.svg';
import UserSVG from '../../shared/images/icons/user.svg';
import s from './Layout.module.scss';

const Layout = ({
	favoritesItems,
	basketItems,
	setBasketItems,
	deleteItemFromBasket,
	basketURL,
	ordersURL,
	setOrdersItems,
	totalPrice,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [orderCompleted, setOrderCompleted] = useState(false);
	
	const basketVisibilityHandler = () => {
		!isOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = null;
		setIsOpen(!isOpen);
		setOrderCompleted(false);
	};
	
	return (
		<div className={s.wrapper}>
			
			<Basket
				isOpen={isOpen}
				basketVisibilityHandler={basketVisibilityHandler}
				basketItems={basketItems}
				setBasketItems={setBasketItems}
				deleteItemFromBasket={deleteItemFromBasket}
				orderCompleted={orderCompleted}
				setOrderCompleted={setOrderCompleted}
				basketURL={basketURL}
				ordersURL={ordersURL}
				setOrdersItems={setOrdersItems}
				totalPrice={totalPrice}
			/>
			
			<header className={s.header}>
				
				<NavLink to="/">
					<div className={s.headerLeft}>
						<img src={Logo} alt="Logo" />
						<div>
							<h1>REACT SNEAKERS</h1>
							<h2>Магазин кроссовок</h2>
						</div>
					</div>
				</NavLink>
				
				<ul className={s.headerRight}>
					<li onClick={basketVisibilityHandler}>
						<img src={BasketSVG} alt="Basket" />
						<span
							className={s.totalPrice}>{totalPrice() ? `${totalPrice()} руб.` : 'Корзина пуста'}</span>
					</li>
					<li>
						<NavLink to="/favorites">
							<img src={HeartSVG} alt="Favorites" />
							<span
								className={favoritesItems.length ? `${s.favCount} ${s.active}` : s.favCount}
							>
								{!!favoritesItems.length && favoritesItems.length}
							</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/orders">
							<img src={UserSVG} alt="Orders" />
						</NavLink>
					</li>
				</ul>
			
			</header>
			
			<main>
				<Outlet />
			</main>
		
		</div>
	);
};

export default Layout;