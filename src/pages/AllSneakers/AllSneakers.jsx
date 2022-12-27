import { useState } from 'react';
import MainCard from '../../components/MainCard/MainCard';
import CardLoader from '../../components/CardLoader/CardLoader';
import TitleLoader from '../../components/TitleLoader/TitleLoader';
import SearchSVG from '../../shared/images/icons/search.svg';
import s from './AllSneakers.module.scss';

const AllSneakers = ({
	sneakersData,
	favoritesItems,
	addItemToBasket,
	deleteItemFromBasket,
	addItemToFavorite,
	deleteItemFromFavorite,
	isLoading,
}) => {
	
	const [searchValue, setSearchValue] = useState('');
	
	const searchInputHandler = (e) => {
		setSearchValue(e.target.value);
	};
	
	const clearSearchInput = () => {
		setSearchValue('');
	};
	
	if (!isLoading && !sneakersData.length) {
		return (
			<selection className={s.error}>
				<p>К сожалению, не удалось получить данные :(</p>
				<p>Попробуйте повторить попытку позже</p>
			</selection>
		);
	}
	
	return (
		<section className={s.content}>
			<div className={s.top}>
				{isLoading ? <TitleLoader /> : <h2>Все кроссовки</h2>}
				{
					isLoading
						? <TitleLoader />
						: <div className={s.searchBlock}>
							<img src={SearchSVG} alt="Search icon" />
							{searchValue &&
								<button onClick={clearSearchInput}>&#128939;</button>}
							<input
								type="text"
								placeholder="Поиск..."
								value={searchValue}
								onChange={searchInputHandler}
							/>
						</div>
				}
			</div>
			<div className="cards-wrapper">
				{
					isLoading
						? <CardLoader />
						: sneakersData
						.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
						.map(item => <MainCard
							key={item.id}
							inFavorite={favoritesItems.some(obj => obj.id === item.id)}
							addItemToBasket={addItemToBasket}
							deleteItemFromBasket={deleteItemFromBasket}
							addItemToFavorite={addItemToFavorite}
							deleteItemFromFavorite={deleteItemFromFavorite}
							{...item}
						/>)
				}
			</div>
		</section>
	);
};

export default AllSneakers;