import { Outlet } from 'react-router-dom';
import Basket from '../Basket/Basket';
import Logo from '../../shared/images/logo.png';
import BasketSVG from '../../shared/images/icons/basket.svg';
import HeartSVG from '../../shared/images/icons/heart.svg';
import UserSVG from '../../shared/images/icons/user.svg';
import s from './Layout.module.scss';

const Layout = () => {
	return (
		<div className={s.wrapper}>
			
			<Basket />
			
			<header className={s.header}>
				<div className={s.headerLeft}>
					<img src={Logo} alt="Logo" />
					<div>
						<h1>REACT SNEAKERS</h1>
						<h2>Магазин лучших кроссовок</h2>
					</div>
				</div>
				<ul className={s.headerRight}>
					<li>
						<img src={BasketSVG} alt="Basket" />
						<span className={s.count}>1205 руб.</span>
					</li>
					<li>
						<img src={HeartSVG} alt="Favourites" />
					</li>
					<li>
						<img src={UserSVG} alt="Profile" />
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