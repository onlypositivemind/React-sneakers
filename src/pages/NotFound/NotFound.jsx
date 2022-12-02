import Button from '../../components/Button/Button';
import s from './NotFound.module.scss';

const NotFound = () => {
	return (
		<section className={s.content}>
			<p className={s.title}>Страница не найдена</p>
			<p className={s.subtitle}>К сожалению, такой страницы не существует :(</p>
			<Button>Перейти на главную</Button>
		</section>
	);
};

export default NotFound;