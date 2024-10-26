import React from 'react';
import { CustomPaper } from '../../reusable';
import { Typography, Box, ListItem, List } from '@mui/material';
import avatar from '../../../assets/svg/avatar.svg'




export const PersonalInformationPaper: React.FC = () => {
	return (
		<CustomPaper
			title="Личные данные"
			// navigationPath='/reports'
		>
			<Box
				sx={{display:'flex', alignItems:'center', gap:1}}
			>
				<img src={avatar} alt="" />
				<Typography
					variant="h5"

				>
					Иванов Иван Иванович
				</Typography>
			</Box>
			<List>
				<ListItem sx={{display:'flex', flexDirection:'row', gap:1}}>
					<Typography component="span" variant="h6">
						Должность:
					</Typography>
					<Typography
						variant="h6"
						sx={{color:'blueGreen.main'}}
					>
						Диспетчер
					</Typography>
				</ListItem>
			</List>

		</CustomPaper>
	)
}
