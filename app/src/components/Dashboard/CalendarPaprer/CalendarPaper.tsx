import React from 'react';
import { CustomPaper } from '../../reusable';
import { Calendar } from './Calendar/Calendar.tsx';

export const CalendarPaper: React.FC = () => {
	return (
		<CustomPaper title="Календарь событий" navigationPath="/reports">
			<Calendar onDateSelect={(date: string) => `/reports/${date}`} />
		</CustomPaper>
	);
};
