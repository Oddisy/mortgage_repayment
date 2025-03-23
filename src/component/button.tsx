import "../css/button.css"
import {ButtonProps} from "../../interface"
export const Button = ({ btnText, btnClassName }: ButtonProps) => {
	return (
		
		<div className={btnClassName}>
			<button>

				{btnText}
			</button>


		</div>

		
	)
}