import InfoTemplate from '../../components/InfoTemplate/InfoTemplate';
import MainCard from '../../components/MainCard/MainCard';
import CardLoader from '../../components/CardLoader/CardLoader';
import TitleLoader from '../../components/TitleLoader/TitleLoader';
import EmojiFav from '../../shared/images/emoji-favorite.png';
import s from './Favorites.module.scss';

const Favorites = ({
	favoritesItems,
	addItemToBasket,
	deleteItemFromBasket,
	addItemToFavorite,
	deleteItemFromFavorite,
	isLoading,
}) => {
	
	return (
		isLoading
			? <section className={s.favorites}>
				<h2><TitleLoader /></h2>
				<div className="cards-wrapper">
					<CardLoader />
				</div>
			</section>
			: !favoritesItems.length
				? <InfoTemplate
					title="Закладок нет :("
					subtitle="Вы ничего не добавляли в закладки"
					image={EmojiFav}
				/>
				: <section className={s.favorites}>
					<h2>Мои закладки</h2>
					<div className="cards-wrapper">
						{
							favoritesItems.map(item => <MainCard
								key={item.id}
								inFavorite={true}
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

export default Favorites;