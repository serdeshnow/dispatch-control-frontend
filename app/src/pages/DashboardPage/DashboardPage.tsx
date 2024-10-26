import { Container, Typography } from '@mui/material';
import { CalendarPaper } from '../../components';
import { PersonalInformationPaper } from '../../components/Dashboard/PersonalInformationPaper/PersonaInformationPaper';

export const DashboardPage = () => {
	return (
		<Container sx={{height:1}}>
			<Typography variant="h5" component="p">Dashboard page</Typography>
			<CalendarPaper/>
			<PersonalInformationPaper/>
		</Container>
	);
};
