import "../css/button.css"
import {ButtonProps} from "../../interface"
export const Button = ({
	btnText,
	btnClassName,
	btnIcon,
	btnType,
	onClick,
}: ButtonProps) => {
	return (
		<button type={btnType} onClick={onClick} className={btnClassName}>
			<div>
				<div>{btnIcon}</div>
				<p>{btnText}</p>
			</div>
		</button>
	);
};