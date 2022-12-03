import { useState } from 'react';
import MainCard from '../../components/MainCard/MainCard';
import SearchSVG from '../../shared/images/icons/search.svg';
import s from './AllSneakers.module.scss';

const AllSneakers = ({ sneakersData, setSneakersData }) => {
	const [searchValue, setSearchValue] = useState('');
	
	const searchInputHandler = e => {
		setSearchValue(e.target.value);
	};
	
	return (
		<section className={s.content}>
			<div className={s.top}>
				<h2>{searchValue ? `Поиск: ${searchValue}` : 'Все кроссовки'}</h2>
				<div className={s.searchBlock}>
					<img src={SearchSVG} alt="Search icon" />
					{searchValue &&
						<button onClick={() => setSearchValue('')}>
							&#128939;
						</button>}
					<input
						type="text"
						placeholder="Поиск..."
						value={searchValue}
						onChange={searchInputHandler}
					/>
				</div>
			</div>
			<div className={s.cards}>
				{!!sneakersData.length && sneakersData
				.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
				.map(item => <MainCard
						key={item.id}
						id={item.id}
						name={item.name}
						price={item.price}
						imageURL={item.imageURL}
						inFavorite={item.inFavorite}
						inBasket={item.inBasket}
					/>
				)}
			</div>
		</section>
	);
};

export default AllSneakers;