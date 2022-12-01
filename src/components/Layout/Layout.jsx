import { NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';
import Basket from '../Basket/Basket';
import Logo from '../../shared/images/logo.png';
import BasketSVG from '../../shared/images/icons/basket.svg';
import HeartSVG from '../../shared/images/icons/heart.svg';
import UserSVG from '../../shared/images/icons/user.svg';
import s from './Layout.module.scss';

const Layout = () => {
	
	const [isOpen, setIsOpen] = useState(false);
	const basketOpenHandler = () => {
		setIsOpen(true);
	};
	const basketCloseHandler = () => {
		setIsOpen(false);
	};
	
	return (
		<div className={s.wrapper}>
			
			<Basket isOpen={isOpen} basketCloseHandler={basketCloseHandler} />
			
			<header className={s.header}>
				
				<div className={s.headerLeft}>
					<NavLink to="/">
						<img src={Logo} alt="Logo" />
					</NavLink>
					<div>
						<h1>REACT SNEAKERS</h1>
						<h2>Магазин кроссовок</h2>
					</div>
				</div>
				
				<ul className={s.headerRight}>
					<li onClick={basketOpenHandler}>
						<img src={BasketSVG} alt="Basket" />
						<span className={s.count}>1205 руб.</span>
					</li>
					<li>
						<NavLink to="/favorites">
							<img src={HeartSVG} alt="Favorites" />
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