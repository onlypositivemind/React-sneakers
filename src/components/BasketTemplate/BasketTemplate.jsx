import Button from '../Button/Button';
import s from './BasketTemplate.module.scss';

const BasketTemplate = ({
	title,
	subtitle,
	image,
	basketVisibilityHandler
}) => {
	
	return (
		<div className={s.content}>
			<img src={image} alt="oops" />
			<p className={s.title}>{title}</p>
			<p className={s.subtitle}>{subtitle}</p>
			<Button onClick={basketVisibilityHandler}>Закрыть корзину</Button>
		</div>
	);
};

export default BasketTemplate;