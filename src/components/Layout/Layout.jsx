import { Outlet } from 'react-router-dom';
import Logo from '../../shared/images/logo.png';
import Basket from '../../shared/images/icons/basket.svg';
import Heart from '../../shared/images/icons/heart.svg';
import User from '../../shared/images/icons/user.svg';
import s from './Layout.module.scss';

const Layout = () => {
	return (
		<div className={s.wrapper}>
			
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
						<img src={Basket} alt="Basket" />
						<span>1205 руб.</span>
					</li>
					<li>
						<img src={Heart} alt="Favourites" />
					</li>
					<li>
						<img src={User} alt="Profile" />
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