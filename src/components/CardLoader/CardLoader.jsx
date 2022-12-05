import ContentLoader from 'react-content-loader';
import s from './CardLoader.module.scss';

const CardLoader = ({ qty = 8 }) => {
	
	return (
		<>
			{
				[...Array(qty)].map((el, i) => <ContentLoader
					key={i}
					speed={1}
					width={210}
					height={260}
					viewBox="0 0 210 260"
					backgroundColor="#f3f3f3"
					foregroundColor="#ecebeb"
					className={s.loaderWrapper}
				>
					<rect x="0" y="1115" rx="2" ry="2" width="170" height="15" />
					<rect x="30" y="140" rx="2" ry="2" width="150" height="15" />
					<rect x="30" y="195" rx="5" ry="5" width="90" height="25" />
					<rect x="30" y="30" rx="10" ry="10" width="150" height="90" />
					<rect x="30" y="160" rx="2" ry="2" width="110" height="15" />
					<rect x="140" y="195" rx="8" ry="8" width="40" height="25" />
				</ContentLoader>)
			}
		</>
	);
};

export default CardLoader;