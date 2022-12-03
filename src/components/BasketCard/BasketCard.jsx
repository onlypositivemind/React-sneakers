import DeleteSVG from '../../shared/images/icons/btn-remove.svg';
import s from './BasketCard.module.scss';

const BasketCard = ({ name, price, imageURL }) => {
	return (
		<div className={s.cardWrapper}>
			<img className={s.sneakersImage} src={imageURL} alt="Sneakers" />
			<div className={s.description}>
				<p className={s.title}>{name}</p>
				<p className={s.price}>{price} руб.</p>
			</div>
			<img
				className={s.delete}
				src={DeleteSVG}
				alt="Delete button"
			/>
		</div>
	);
};

export default BasketCard;