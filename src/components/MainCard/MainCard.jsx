import UnLiked from '../../shared/images/icons/heart.svg';
// eslint-disable-next-line no-unused-vars
import Liked from '../../shared/images/icons/heart-liked.svg';
import NotSelected from '../../shared/images/icons/btn-plus.svg';
// eslint-disable-next-line no-unused-vars
import Selected from '../../shared/images/icons/btn-checked.svg';
import s from './MainCard.module.scss';

import IMGTest from '../../shared/images/2.jpg';

const MainCard = () => {
	return (
		<div className={s.cardWrapper}>
			<img src={UnLiked} className={s.topBtn} alt="Like" />
			<img src={IMGTest} alt="Sneakers" className={s.image} />
			<p className={s.title}>Мужские Кроссовки Nike Air Max 270</p>
			<div className={s.cardBottom}>
				<div>
					<p className={s.priceTitle}>Цена:</p>
					<p className={s.priceValue}>12 999 руб.</p>
				</div>
				<img src={NotSelected} alt="Add" className={s.bottomBtn} />
			</div>
		</div>
	);
};

export default MainCard;