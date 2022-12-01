import Button from '../../components/Button/Button';
import Emoji from '../../shared/images/emoji-favorite.png';
import s from './Favorites.module.scss';

const Favorites = () => {
	return (
		<section className={s.content}>
			<img className={s.emoji} src={Emoji} alt="emoji" />
			<p className={s.title}>Закладок нет :(</p>
			<p className={s.subtitle}>Вы ничего не добавляли в закладки</p>
			<Button>Вернуться назад</Button>
		</section>
	);
};

export default Favorites;