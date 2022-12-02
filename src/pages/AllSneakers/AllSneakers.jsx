import { useState, useEffect } from 'react';
import MainCard from '../../components/MainCard/MainCard';
import SearchSVG from '../../shared/images/icons/search.svg';
import s from './AllSneakers.module.scss';

const AllSneakers = () => {
	const [sneakersData, setSneakersData] = useState([]);
	
	useEffect(() => {
		fetch('https://638a04874eccb986e8a12dca.mockapi.io/all-sneakers')
		.then(response => response.json())
		.then(json => setSneakersData(json));
	}, []);
	
	return (
		<section className={s.content}>
			<div className={s.top}>
				<h2>Все кроссовки</h2>
				<div className={s.searchBlock}>
					<img src={SearchSVG} alt="Search icon" />
					<input type="text" placeholder="Поиск..." />
				</div>
			</div>
			<div className={s.cards}>
				{sneakersData.map(item => <MainCard
						key={item.id}
						name={item.name}
						price={item.price}
						imageURL={item.imageURL}
					/>
				)}
			</div>
		</section>
	);
};

export default AllSneakers;