import InfoTemplate from '../../components/InfoTemplate/InfoTemplate';
import EmojiOrders from '../../shared/images/emoji-orders.png';
import s from './Orders.module.scss';

const Orders = () => {
	
	return (
		<InfoTemplate
			title="У вас нет заказов"
			subtitle="Оформите хотя бы один заказ"
			image={EmojiOrders}
		/>
	);
};

export default Orders;