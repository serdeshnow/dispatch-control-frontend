import { Container, Typography, Box } from '@mui/material';
import { CalendarPaper } from '../../components';
import { PersonalInformationPaper } from '../../components/Dashboard/PersonalInformationPaper/PersonaInformationPaper';
import { MonitoringPaper } from '../../components/Dashboard/MonitoringPaper/MonitoringPaper'

export const DashboardPage = () => {
	return (
		<Container sx={{height:1}}>
			<Typography variant="h5" component="p">Dashboard page</Typography>
			<Box
				sx={{display:'flex', padding:4}}
			>
				<CalendarPaper/>
				<MonitoringPaper/>
				<PersonalInformationPaper/>
			</Box>
		</Container>
	);
};
