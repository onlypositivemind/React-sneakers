import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Emoji from '../../shared/images/emoji-orders.png';
import s from './Orders.module.scss';

const Orders = () => {
	const navigate = useNavigate();
	
	const goBack = () => {
		navigate(-1);
	};
	
	return (
		<section className={s.content}>
			<img className={s.emoji} src={Emoji} alt="emoji" />
			<p className={s.title}>У вас нет заказов</p>
			<p className={s.subtitle}>Оформите хотя бы один заказ</p>
			<Button onClick={goBack}>Вернуться назад</Button>
		</section>
	);
};

export default Orders;