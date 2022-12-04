import Button from '../../components/Button/Button';
import BasketImg from '../../shared/images/basket.jpg';
import BasketCard from '../../components/BasketCard/BasketCard';
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
						? <div className={s.template}>
							<img src={BasketImg} alt="Basket" />
							<p className={s.templateTitle}>Корзина пустая</p>
							<p className={s.templateSubtitle}>
								Добавьте хотя бы одну пару
								кроссовок, чтобы сделать заказ
							</p>
							<Button onClick={basketVisibilityHandler}>Закрыть корзину</Button>
						</div>
						: <div className={s.content}>
							<div className={s.cardsWrapper}>
								{basketItems.map(item => <BasketCard
									key={item.id}
									id={item.id}
									name={item.name}
									price={item.price}
									imageURL={item.imageURL}
									deleteItemFromBasket={deleteItemFromBasket}
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