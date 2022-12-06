import { useState } from 'react';
import axios from 'axios';
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
	setBasketItems,
	deleteItemFromBasket,
	basketURL,
	ordersURL,
	setOrdersItems,
	totalPrice,
}) => {
	
	const [orderCompleted, setOrderCompleted] = useState(false);
	
	const completedOrderHandler = async () => {
		setOrderCompleted(true);
		try {
			await axios.post(ordersURL, { item: basketItems, });
			
			setBasketItems([]);
			
			const { data } = await axios.get(ordersURL);
			setOrdersItems(data);
			
			for (const item of basketItems) {
				await axios.delete(`${basketURL}/${item.route}`);
			}
		} catch (error) {
			alert('Не удалось оформить заказ');
		}
	};
	
	const stopPropagation = (e) => {
		e.stopPropagation();
	};
	
	return (
		<div
			className={isOpen ? `${s.overlay} ${s.active}` : `${s.overlay}`}
			onClick={basketVisibilityHandler}
		>
			<div
				className={isOpen ? `${s.drawer} ${s.active}` : `${s.drawer}`}
				onClick={stopPropagation}
			>
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
							title={orderCompleted ? 'Заказ оформлен!' : 'Корзина пустая'}
							subtitle={orderCompleted
								? 'Ваш заказ скоро будет передан курьерской доставке'
								: 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ'}
							image={orderCompleted ? OrderSentImg : BasketImg}
							basketVisibilityHandler={basketVisibilityHandler}
						/>
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
									<li>Итого:<span>{totalPrice()} руб.</span></li>
									<li>Налог 5%:
										<span>{Math.round(totalPrice() * 0.05)} руб.</span>
									</li>
								</ul>
								<Button onClick={completedOrderHandler}>Оформить заказ</Button>
							</div>
						</div>
				}
			</div>
		</div>
	);
};

export default Basket;