import MainCard from '../../components/MainCard/MainCard';
import SearchSVG from '../../shared/images/icons/search.svg';
import s from './AllSneakers.module.scss';

const AllSneakers = ({ sneakersData, }) => {
	
	return (
		<section className={s.content}>
			<div className={s.top}>
				<h2>Все кроссовки</h2>
				<div className={s.searchBlock}>
					<img src={SearchSVG} alt="Search icon" />
					<input type="text" placeholder="Поиск..." />
				</div>
			</div>
			<div className={s.cards}>
				{!!sneakersData.length && sneakersData.map(item => <MainCard
						key={item.id}
						id={item.id}
						name={item.name}
						price={item.price}
						imageURL={item.imageURL}
					/>
				)}
			</div>
		</section>
	);
};

export default AllSneakers;