// import './ReportPage.scss';
import { Container, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import React from 'react';

export const ReportPage: React.FC = () => {

	const { date } = useParams<{ date: string }>();

	return (
		<Container sx={{height:1}}>
			<Typography variant="h5" component="div">Report page</Typography>
			<Typography variant="h5" component="div">Выбранная дата: {date}</Typography>

		</Container>
	);
};
