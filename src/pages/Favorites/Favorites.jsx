import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import MainCard from '../../components/MainCard/MainCard';
import CardLoader from '../../components/CardLoader/CardLoader';
import TitleLoader from '../../components/TitleLoader/TitleLoader';
import Emoji from '../../shared/images/emoji-favorite.png';
import s from './Favorites.module.scss';

const Favorites = ({
	favoritesItems,
	addItemToBasket,
	deleteItemFromBasket,
	addItemToFavorite,
	deleteItemFromFavorite,
	isLoading,
}) => {
	const navigate = useNavigate();
	
	const goBack = () => {
		navigate(-1);
	};
	
	return (
		isLoading
			? <section className={s.favorites}>
				<h2><TitleLoader /></h2>
				<div className={s.cardsWrapper}>
					<CardLoader />
				</div>
			</section>
			: !favoritesItems.length
				? <section className={s.content}>
					<img className={s.emoji} src={Emoji} alt="emoji" />
					<p className={s.title}>Закладок нет :(</p>
					<p className={s.subtitle}>Вы ничего не добавляли в закладки</p>
					<Button onClick={goBack}>Вернуться назад</Button>
				</section>
				: <section className={s.favorites}>
					<h2>Мои закладки</h2>
					<div className={s.cardsWrapper}>
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