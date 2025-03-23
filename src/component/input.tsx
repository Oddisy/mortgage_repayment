import {InputProps} from "../../interface"
export const Input = ({mortgageAmountContainer , mortgageAmountInputContainer ,mortgageInputCurrency,htmlFor, labelText}:InputProps) => {
	return (
		<div className={mortgageAmountContainer  }>
		  <label htmlFor={htmlFor}>{labelText}</label>
		  <div className={mortgageAmountInputContainer}>
		    <div className={mortgageInputCurrency}></div>
		    <input type="text" />
		  </div>
		</div>
	)
}