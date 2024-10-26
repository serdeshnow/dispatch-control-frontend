import React, { ReactNode } from 'react';
import { Chip, Divider, Grid2, IconButton, Paper } from '@mui/material';
import arrow_right from '../../../assets/svg/arrow-right.svg';
import { useNavigate } from 'react-router-dom';

interface CustomPaperProps {
	title: string;
	children: ReactNode;
	navigationPath?: string;
}

export const CustomPaper: React.FC<CustomPaperProps> =
	({
    title,
    children,
    navigationPath = '/',
  }) => {
	const navigate = useNavigate();

	const handleSectionClick = () => {
		navigate(navigationPath);
	};

	return (
		<Paper elevation={3} sx={{ p: 3, maxWidth: '800px', margin: '20px auto' }}>
			<Grid2 container justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
				<Chip
					label={title}
					// variant="h5"
					component="h2"
					color="error"
					sx={{borderRadius: 2}}/>


				<IconButton onClick={handleSectionClick} color="primary">
					<img src={arrow_right} alt="Перейти" />
				</IconButton>
			</Grid2>
			<Divider sx={{ my: 2 }} />
			{children}
		</Paper>
	);
};
