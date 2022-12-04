import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import MainCard from '../../components/MainCard/MainCard';
import Emoji from '../../shared/images/emoji-favorite.png';
import s from './Favorites.module.scss';

const Favorites = ({
	favoritesItems,
	addItemToBasket,
	deleteItemFromBasket,
	addItemToFavorite,
	deleteItemFromFavorite
}) => {
	
	return (
		!favoritesItems.length
			? <section className={s.content}>
				<img className={s.emoji} src={Emoji} alt="emoji" />
				<p className={s.title}>Закладок нет :(</p>
				<p className={s.subtitle}>Вы ничего не добавляли в закладки</p>
				<Link to="/"><Button>Перейти на главную</Button></Link>
			</section>
			: <section className={s.favorites}>
				<h2>Мои закладки</h2>
				<div className="cards-wrapper">
					{favoritesItems.map(item => <MainCard
						key={item.id}
						{...item}
						favorited={true}
						addItemToBasket={addItemToBasket}
						deleteItemFromBasket={deleteItemFromBasket}
						addItemToFavorite={addItemToFavorite}
						deleteItemFromFavorite={deleteItemFromFavorite}
					/>)}
				</div>
			</section>
	);
};

export default Favorites;