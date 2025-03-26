import "../css/button.css"
import {ButtonProps} from "../../interface"
export const Button = ({ btnText, btnClassName, btnIcon }: ButtonProps) => {
	return (
		<button className={btnClassName}>
			<div>
				<div>{btnIcon}</div>
				<p>{btnText}</p>
			</div>
		</button>
	);
};