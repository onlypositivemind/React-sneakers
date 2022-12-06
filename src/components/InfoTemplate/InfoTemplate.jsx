import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import s from './InfoTemplate.module.scss';

const InfoTemplate = ({
	title,
	subtitle,
	image,
}) => {
	const navigate = useNavigate();
	
	const goBack = () => {
		navigate(-1);
	};
	
	return (
		<section className={s.content}>
			<img className={s.image} src={image} alt="oops" />
			<p className={s.title}>{title}</p>
			<p className={s.subtitle}>{subtitle}</p>
			<Button onClick={goBack}>Вернуться назад</Button>
		</section>
	);
	
};

export default InfoTemplate;