import ContentLoader from 'react-content-loader';

const TitleLoader = () => {
	return (
		<ContentLoader
			speed={1}
			width={240}
			height={45}
			viewBox="0 0 240 45"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb"
		>
			<rect x="0" y="1115" rx="2" ry="2" width="170" height="15" />
			<rect x="0" y="0" rx="3" ry="3" width="240" height="45" />
		</ContentLoader>
	);
};

export default TitleLoader;