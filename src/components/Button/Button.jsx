import s from './Button.module.scss';

const Button = ({ children, onClick }) => {
	
	return (
		<button
			className={s.customButton}
			onClick={onClick}
		>
			<p>{children}</p>
		</button>
	);
};

export default Button;