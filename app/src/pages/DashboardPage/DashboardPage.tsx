import { Container, Typography } from '@mui/material';
import { CalendarPaper } from '../../components';

export const DashboardPage = () => {
	return (
		<Container sx={{height:1}}>
			<Typography variant="h5" component="p">Dashboard page</Typography>
			<CalendarPaper/>
		</Container>
	);
};
