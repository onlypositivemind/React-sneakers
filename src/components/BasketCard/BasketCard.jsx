import IMGTest from '../../shared/images/2.jpg';
import DeleteSVG from '../../shared/images/icons/btn-remove.svg';
import s from './BasketCard.module.scss';

const BasketCard = () => {
	return (
		<div className={s.cardWrapper}>
			<img className={s.sneakersImage} src={IMGTest} alt="Sneakers" />
			<div className={s.description}>
				<p className={s.title}>Мужские Кроссовки Nike Air Max 270</p>
				<p className={s.price}>12 999 руб.</p>
			</div>
			<img className={s.delete} src={DeleteSVG} alt="Delete button" />
		</div>
	);
};

export default BasketCard;