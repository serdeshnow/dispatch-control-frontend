import React from 'react';
import { CustomPaper } from '../../reusable';
import { Typography, Box, ListItem, List } from '@mui/material';
import avatar from '../../../assets/svg/avatar.svg'
import backlogo from '../../../assets/svg/backGroundPersonInfo.svg'
import '../PersonalInformationPaper/PersonalInformationPaper.scss'



export const PersonalInformationPaper: React.FC<{hasButton:boolean;}> = ({hasButton}) => {
	return (
		<CustomPaper
			hasButton={hasButton}
			title="Личные данные"
			// navigationPath='/reports'
			className="personal__info"
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
				<ListItem sx={{display:'flex', flexDirection:'row', gap:1}}>
					<Typography component="span" variant="h6">
						Почта:
					</Typography>
					<Typography
						variant="h6"
						sx={{color:'blueGreen.main'}}
					>
						example@mail.com
					</Typography>
				</ListItem>
				<ListItem sx={{display:'flex', flexDirection:'row', gap:1}}>
					<Typography component="span" variant="h6">
						Смена:
					</Typography>
					<Typography
						variant="h6"
						sx={{color:'blueGreen.main'}}
					>
						Диспетчер
					</Typography>
				</ListItem>

			</List>
			<img src={backlogo} alt="" className='back-logo'/>
		</CustomPaper>
	)
}
