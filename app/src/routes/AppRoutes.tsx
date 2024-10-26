import { Route, Routes } from 'react-router-dom';
import {
	DashboardPage,
	LoginPage,
	MainLayout,
	MonitoringPage, NotFoundPage,
	ReportPage,
	ReportsPage,
} from '../pages';
import { Header } from '../components';

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/login' element={<LoginPage/>}/>
			<Route path="/" element={<MainLayout/>} >
				<Route index element={<DashboardPage/>}/>
				<Route path="header" element={<Header/>}/>
				<Route path="monitoring" element={<MonitoringPage/>}/>
				<Route path="reports" element={<ReportsPage/>}>
					<Route path=":date" element={<ReportPage/>}/>
				</Route >
			</Route>
			<Route path="*" element={<NotFoundPage/>}/>
		</Routes>
	);
};
