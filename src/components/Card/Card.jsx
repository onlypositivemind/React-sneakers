import Plus from '../../shared/images/icons/plus.svg';
import s from './Card.module.scss';

const Card = () => {
	return (
		<div className={s.card}>
			<img src="" alt="Sneakers" className={s.image} />
			<p className={s.title}>Мужские Кроссовки Nike Air Max 270</p>
			<div className={s.cardBottom}>
				<div>
					<p className={s.priceTitle}>Цена:</p>
					<p className={s.priceValue}>12 999 руб.</p>
				</div>
				<button>
					<img src={Plus} alt="Add" />
				</button>
			</div>
		</div>
	);
};

export default Card;