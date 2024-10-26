import React from 'react';
import { CustomPaper } from '../../reusable';
import { Typography, Box } from '@mui/material';
import backlogo from '../../../assets/svg/backCamera.svg'
import '../../Dashboard/MonitoringPaper/MonitoringPaper.scss'

export const MonitoringPaper: React.FC = () => {
	return (
		<CustomPaper
			title="Мониторинг"
		>
			<Box

			>
				<Typography>
					hello
				</Typography>
				<img src={backlogo} alt="" className='back-logo1' />
			</Box>


		</CustomPaper>
	)
}
