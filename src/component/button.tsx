
import {ButtonProps} from "../../interface"
export  const Button =  ({text, btnClassName}: ButtonProps) => {
	return (
		
			<button className={btnClassName}>
				{text}


			</button>

		
	)
}