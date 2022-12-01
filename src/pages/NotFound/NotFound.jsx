import Button from '../../components/Button/Button';
import s from './NotFound.module.scss';

const NotFound = () => {
	return (
		<section className={s.content}>
			<p className={s.title}>ОШИБКА 404</p>
			<p className={s.subtitle}>Упс, похоже эта страница не работает :(</p>
			<Button>Перейти на главную</Button>
		</section>
	);
};

export default NotFound;