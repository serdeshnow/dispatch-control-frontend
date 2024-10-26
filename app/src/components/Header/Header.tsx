import { AppBar, Button, Toolbar, Box } from '@mui/material';
import './Header.scss'
import logo from '../../assets/svg/rgdlogo.svg'
import headerline from '../../assets/svg/red-line-header.svg'
import logout from '../../assets/svg/logout.svg'
import '../../theme'



export const Header = () => {
	return (
		<AppBar className='app-bar'
			sx={{height:"10%", color:"common.white", backgroundColor:"common.white"}}
		>

			<Toolbar className='toolbar'>
				<img src={logo} alt="" className="logo" />
				<Box sx={{display:'flex', gap:3}}>
					<Button
						variant='text'
						sx={{color:"common.black"}}
					>
						Главная
					</Button>

					<Button
						variant='text'
						sx={{color:'common.black'}}
					>
						Мониторинг
					</Button>

					<Button
						variant='text'
						sx={{color:'common.black'}}
					>
						Календарь отчетов
					</Button>
				</Box>

				<Button sx={{color:'common.black'}}>
					<img src={logout} alt="" />
				</Button>
			</Toolbar>

			<img className='red-line' src={headerline} alt="" />
		</AppBar>
	);
};
