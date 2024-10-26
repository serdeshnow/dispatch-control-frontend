import './LoginPage.scss';
import big_train from '../../assets/svg/bigTrain.svg';
import ellipse from '../../assets/svg/Ellipse.svg';
import line_left_bottom from '../../assets/svg/LineLeftBottom.svg';
import line_left_top from '../../assets/svg/LineLeftTop.svg';
import line_right_bottom from '../../assets/svg/LineRightBottom.svg';
import rectangle_left_bottom from '../../assets/svg/RectangleLeftBottom.svg';
import rectangle_left_top from '../../assets/svg/RectangleLeftTop.svg';
import rectangle_right_top from '../../assets/svg/RectangleRightTop.svg';
import small_train from '../../assets/svg/smallTrain.svg';
import tree from '../../assets/svg/Tree.svg';
import subtracts from '../../assets/svg/Subtract.svg';
import { Button, TextField, Typography } from '@mui/material';

export const LoginPage = () => {
	return (
		<section className='login'>
			<div className="main_wrapper">
				<div>
					<img className="big_train" src={big_train} alt="" />
					<img src={ellipse} alt="" className="ellipse" />
					<img src={line_left_bottom} alt="" className="line_left_bottom" />
					<img src={line_left_top} alt="" className="line_left_top" />
					<img src={line_right_bottom} alt="" className="line_right_bottom" />
					<img src={rectangle_left_bottom} alt="" className="rectangle_left_bottom" />
					<img src={rectangle_left_top} alt="" className="rectangle_left_top" />
					<img src={rectangle_right_top} alt="" className="rectangle_right_top" />
					<img src={small_train} alt="" className="small_train" />
					<img src={tree} alt="" className="tree" />
					<img src={subtracts} alt="" className="subtracts" />
				</div>
				{/*<div className="form_wrapper">*/}
					<div className="login_form">
						<Typography className='title'
						            id='title'
						            variant='h3'
						            sx={{ mt: 3 }}
						>
							Вход в систему
						</Typography>

						<TextField
							id='login_user_password'
							label='Почта'
							sx={{ color: 'secondary.main', width:"0.9"}}

						/>

						<TextField
							id='login_user_name'
							label='Пароль'
							type='password'
							sx={{ color: 'secondary.main', width:"0.9" }}

						/>
						<Button className='login__btn' variant="contained" sx={{borderRadius:"10px", px:5 , py:1.5, mt:"auto", mb:3}}>Войти</Button>
					</div>
			</div>
		</section>
	);
};
