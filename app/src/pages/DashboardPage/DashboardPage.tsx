import { Container, Typography, Box } from '@mui/material';
import { CalendarPaper } from '../../components';
<<<<<<< HEAD
import { PersonalInformationPaper } from '../../components/Dashboard/PersonalInformationPaper/PersonaInformationPaper';
import { MonitoringPaper } from '../../components/Dashboard/MonitoringPaper/MonitoringPaper'
=======
>>>>>>> eb243c3c707d49bdc142e8e6fd19b687ff831943

export const DashboardPage = () => {
	return (
		<Container sx={{height:1}}>
			<Typography variant="h5" component="p">Dashboard page</Typography>
<<<<<<< HEAD
			<Box
				sx={{display:'flex', padding:4}}
			>
				<CalendarPaper/>
				<MonitoringPaper/>
				<PersonalInformationPaper/>
			</Box>
=======
			<CalendarPaper/>
>>>>>>> eb243c3c707d49bdc142e8e6fd19b687ff831943
		</Container>
	);
};
