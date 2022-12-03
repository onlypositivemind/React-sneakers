import { useState } from 'react';
import UnLikedSVG from '../../shared/images/icons/heart.svg';
import LikedSVG from '../../shared/images/icons/heart-liked.svg';
import UnSelectedSVG from '../../shared/images/icons/btn-plus.svg';
import SelectedSVG from '../../shared/images/icons/btn-checked.svg';
import s from './MainCard.module.scss';

const MainCard = ({
	name,
	price,
	imageURL,
	inFavorite,
	inBasket,
}) => {
	const [selected, setSelected] = useState(false);
	const [favorite, setFavorite] = useState(false);
	
	const selectHandler = () => {
		setSelected(!selected);
	};
	
	const favoriteHandler = () => {
		setFavorite(!favorite);
	};
	
	return (
		<div className={s.cardWrapper}>
			<img
				src={inFavorite ? LikedSVG : UnLikedSVG}
				className={s.topBtn}
				alt="Add to favorite"
				onClick={favoriteHandler}
			/>
			<img src={imageURL} alt="Sneakers" className={s.image} />
			<p className={s.title}>{name}</p>
			<div className={s.cardBottom}>
				<div>
					<p className={s.priceTitle}>Цена:</p>
					<p className={s.priceValue}>{price} руб.</p>
				</div>
				<img
					src={inBasket ? SelectedSVG : UnSelectedSVG}
					className={s.bottomBtn}
					alt="Add to basket"
					onClick={selectHandler}
				/>
			</div>
		</div>
	);
};

export default MainCard;