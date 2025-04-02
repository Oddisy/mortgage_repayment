import "../css/button.css"
import {ButtonProps} from "../../interface"
export const Button = ({
	btnText,
	btnClassName,
	btnIcon,
	btnType,
	disabled,
}: ButtonProps) => {
	return (
		<button disabled={disabled} type={btnType} className={btnClassName}>
			<div>
				<div>{btnIcon}</div>
				<p>{btnText}</p>
			</div>
		</button>
	);
};