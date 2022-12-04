import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Emoji from '../../shared/images/emoji-orders.png';
import s from './Orders.module.scss';

const Orders = () => {
	return (
		<section className={s.content}>
			<img className={s.emoji} src={Emoji} alt="emoji" />
			<p className={s.title}>У вас нет заказов</p>
			<p className={s.subtitle}>Оформите хотя бы один заказ</p>
			<Link to="/"><Button>Перейти на главную</Button></Link>
		</section>
	);
};

export default Orders;