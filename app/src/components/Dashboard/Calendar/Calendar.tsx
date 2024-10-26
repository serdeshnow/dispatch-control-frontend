// import './Calendar.scss';
import { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

export const Calendar: React.FC = () => {
	const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
	const navigate = useNavigate();

	const handleDateChange = (date: Dayjs | null) => {
		setSelectedDate(date);
		if (date) {
			const formattedDate = date.format('YYYY-MM-DD');
			navigate(`reports/${formattedDate}`);
		}
	};

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DemoContainer components={['DateCalendar']}>
				<DateCalendar
					value={selectedDate}
					onChange={handleDateChange}
					views={['year', 'day']}
				/>
			</DemoContainer>
		</LocalizationProvider>
	);
};
