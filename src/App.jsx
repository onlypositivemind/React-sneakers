import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import AllSneakers from './pages/AllSneakers/AllSneakers';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<AllSneakers />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
