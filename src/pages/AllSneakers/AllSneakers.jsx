import Card from '../../components/Card/Card';
import s from './AllSneakers.module.scss';

const AllSneakers = () => {
	return (
		<section className={s.content}>
			<h2>Все кроссовки</h2>
			<div className={s.cards}>
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</section>
	);
};

export default AllSneakers;