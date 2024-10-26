import { Container } from '@mui/material';
import { CalendarPaper } from '../../components';
import { PersonalInformationPaper } from '../../components/Dashboard/PersonalInformationPaper/PersonaInformationPaper';
import { MonitoringPaper } from '../../components/Dashboard/MonitoringPaper/MonitoringPaper'


export const DashboardPage = () => {
	return (
		<Container sx={{display:"flex", gap:2, my:'auto'}}>
				<CalendarPaper />
				<MonitoringPaper/>
				<PersonalInformationPaper/>
		</Container>
	);
};
