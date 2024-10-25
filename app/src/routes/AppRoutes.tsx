import { Route, Routes } from 'react-router-dom';
import { DashboardPage, MainLayout } from '../pages';

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<MainLayout/>} >
				<Route index element={<DashboardPage/>}/>
				{/*<Route path="posts" element={<PostsPage/>}/>*/}
				{/*<Route path="about" element={<AboutPage/>}>*/}
			</Route>
			{/*<Route path="*" element={<NotFoundPage/>}/>*/}
		</Routes>
	);
};
