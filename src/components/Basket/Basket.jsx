import BasketCard from '../../components/BasketCard/BasketCard';
import Button from '../../components/Button/Button';
import s from './Basket.module.scss';

const Basket = ({ isOpen, basketVisibilityHandler }) => {
	
	const stopPropagation = event => {
		event.stopPropagation();
	};
	
	return isOpen && (
		<div className={s.overlay} onClick={basketVisibilityHandler}>
			<div className={s.drawer} onClick={stopPropagation}>
				<div className={s.top}>
					<p className={s.title}>Корзина</p>
					<button
						className={s.close}
						onClick={basketVisibilityHandler}
					>
						&#128939;
					</button>
				</div>
				<div className={s.cardsWrapper}>
					<BasketCard />
					<BasketCard />
					<BasketCard />
				</div>
				<div className={s.bottom}>
					<ul>
						<li>Итого:<span>21 498 руб.</span></li>
						<li>Налог 5%:<span>1074 руб.</span></li>
					</ul>
					<Button>Оформить заказ</Button>
				</div>
			</div>
		</div>
	);
};

export default Basket;