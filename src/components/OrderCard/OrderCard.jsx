import s from './OrderCard.module.scss';

const OrderCard = ({ imageURL, name, price }) => {
	return (
		<div className={s.cardWrapper}>
			<img src={imageURL} className={s.image} alt="Sneakers" />
			<p className={s.title}>{name}</p>
			<div className={s.cardBottom}>
				<p className={s.priceTitle}>Цена:</p>
				<p className={s.priceValue}>{price} руб.</p>
			</div>
		</div>
	);
};

export default OrderCard;