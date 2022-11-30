import MainCard from '../../components/MainCard/MainCard';
import Search from '../../shared/images/icons/search.svg';
import s from './AllSneakers.module.scss';

const AllSneakers = () => {
	return (
		<section className={s.content}>
			<div className={s.top}>
				<h2>Все кроссовки</h2>
				<div className={s.searchBlock}>
					<img src={Search} alt="Search" />
					<input type="text" placeholder="Поиск..." />
				</div>
			</div>
			<div className={s.cards}>
				<MainCard />
				<MainCard />
				<MainCard />
				<MainCard />
			
			</div>
		</section>
	);
};

export default AllSneakers;