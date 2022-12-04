import { useState } from 'react';
import UnLikedSVG from '../../shared/images/icons/heart.svg';
import LikedSVG from '../../shared/images/icons/heart-liked.svg';
import UnSelectedSVG from '../../shared/images/icons/btn-plus.svg';
import SelectedSVG from '../../shared/images/icons/btn-checked.svg';
import s from './MainCard.module.scss';

const MainCard = ({
	id,
	name,
	price,
	imageURL,
	addItemToBasket,
}) => {
	const [selected, setSelected] = useState(false);
	const [favorite, setFavorite] = useState(false);
	
	const selectHandler = (id) => {
		setSelected(!selected);
		addItemToBasket(id);
	};
	
	const favoriteHandler = (id) => {
		setFavorite(!favorite);
	};
	
	return (
		<div className={s.cardWrapper}>
			<img
				src={favorite ? LikedSVG : UnLikedSVG}
				className={s.topBtn}
				alt="Add to favorite"
				onClick={() => favoriteHandler(id)}
			/>
			<img src={imageURL} alt="Sneakers" className={s.image} />
			<p className={s.title}>{name}</p>
			<div className={s.cardBottom}>
				<div>
					<p className={s.priceTitle}>Цена:</p>
					<p className={s.priceValue}>{price} руб.</p>
				</div>
				<img
					src={selected ? SelectedSVG : UnSelectedSVG}
					className={s.bottomBtn}
					alt="Add to basket"
					onClick={() => selectHandler(id)}
				/>
			</div>
		</div>
	);
};

export default MainCard;