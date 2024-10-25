import big_train from '../../assets/svg/bigTrain.svg'
import ellipse from '../../assets/svg/Ellipse.svg'
import line_left_bottom from '../../assets/svg/LineLeftBottom.svg'
import line_left_top from '../../assets/svg/LineLeftTop.svg'
import line_right_bottom from '../../assets/svg/LineRightBottom.svg'
import rectangle_left_bottom from '../../assets/svg/RectangleLeftBottom.svg'
import rectangle_left_top from '../../assets/svg/RectangleLeftTop.svg'
import rectangle_right_top from '../../assets/svg/RectangleRightTop.svg'
import small_train from '../../assets/svg/smallTrain.svg'
import tree from '../../assets/svg/Tree.svg'
import subtract from '../../assets/svg/Subtract.svg'
import './Auth.scss'



export const Auth = () => {
	return (
		<section>
			<div className="main_wrapper">
				<div>
					<img className="big_train" src={big_train} alt=""/>
					<img src={ellipse} alt="" className="ellipse" />
					<img src={line_left_bottom} alt="" className="line_left_bottom" />
					<img src={line_left_top} alt="" className="line_left_top" />
					<img src={line_right_bottom} alt="" className="line_right_bottom" />
					<img src={rectangle_left_bottom} alt="" className="rectangle_left_bottom" />
					<img src={rectangle_left_top} alt="" className="rectangle_left_top" />
					<img src={rectangle_right_top} alt="" className="rectangle_right_top" />
					<img src={small_train} alt="" className="small_train" />
					<img src={tree} alt="" className="tree" />
				</div>
				<div className="form_wrapper">
					<div className="auth_form">
						<h1 className="title"></h1>
						<input type="text" className="auth_user_name" placeholder="123456@mail.com"/>
            <input type="text" className="auth_user_password" placeholder=""/>
					</div>
					<img src={subtract} alt="" className="subtract" />

				</div>

			</div>
		</section>
	);
};
