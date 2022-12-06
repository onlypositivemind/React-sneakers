import Button from '../../components/Button/Button';
import BasketCard from '../../components/BasketCard/BasketCard';
import BasketTemplate from '../BasketTemplate/BasketTemplate';
import BasketImg from '../../shared/images/basket.jpg';
import OrderSentImg from '../../shared/images/order-sent.jpg';
import s from './Basket.module.scss';

const Basket = ({
	isOpen,
	basketVisibilityHandler,
	basketItems,
	deleteItemFromBasket
}) => {
	
	const stopPropagation = (e) => {
		e.stopPropagation();
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
				
				{
					!basketItems.length
						?
						<BasketTemplate
							title="Корзина пустая"
							subtitle="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ"
							image={BasketImg}
							basketVisibilityHandler={basketVisibilityHandler}
						/>
						// ?
						// <BasketTemplate
						// 	title="Заказ оформлен!"
						// 	subtitle="Ваш заказ скоро будет передан курьерской доставке"
						// 	image={OrderSentImg}
						// 	basketVisibilityHandler={basketVisibilityHandler}
						// />
						:
						<div className={s.content}>
							<div className={s.cardsWrapper}>
								{basketItems.map(item => <BasketCard
									key={item.id}
									deleteItemFromBasket={deleteItemFromBasket}
									{...item}
								/>)}
							</div>
							<div className={s.bottom}>
								<ul>
									<li>Итого:<span>21 498 руб.</span></li>
									<li>Налог 5%:<span>1074 руб.</span></li>
								</ul>
								<Button>Оформить заказ</Button>
							</div>
						</div>
				}
			
			</div>
		</div>
	);
};

export default Basket;