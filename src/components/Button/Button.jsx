import s from './Button.module.scss';

const Button = ({ children }) => {
	return (
		<button className={s.customButton}>
			<p>{children}</p>
		</button>
	);
};

export default Button;