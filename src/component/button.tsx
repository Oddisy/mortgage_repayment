import "../css/button.css"
import {ButtonProps} from "../../interface"
export const Button = ({ btnText, btnClassName, btnIcon, btnType }: ButtonProps) => {
	return (
		<button type={btnType} className={btnClassName}>
			<div>
				<div>{btnIcon}</div>
				<p>{btnText}</p>
			</div>
		</button>
	);
};