import InfoTemplate from '../../components/InfoTemplate/InfoTemplate';
import OrderCard from '../../components/OrderCard/OrderCard';
import TitleLoader from '../../components/TitleLoader/TitleLoader';
import CardLoader from '../../components/CardLoader/CardLoader';
import EmojiOrders from '../../shared/images/emoji-orders.png';
import s from './Orders.module.scss';

const Orders = ({ ordersItems, isLoading }) => {
	
	return (
		isLoading
			? <section className={s.orders}>
				<h2><TitleLoader /></h2>
				<div className={s.cardsWrapper}>
					<CardLoader />
				</div>
			</section>
			: !ordersItems.length
				? <InfoTemplate
					title="У вас нет заказов"
					subtitle="Оформите хотя бы один заказ"
					image={EmojiOrders}
				/>
				: <section className={s.orders}>
					<h2>Мои покупки</h2>
					<div className={s.cardsWrapper}>
						{
							ordersItems.map(obj => obj.item.map((item, i) => <OrderCard
								key={i} {...item} />))
						}
					</div>
				</section>
	);
};

export default Orders;