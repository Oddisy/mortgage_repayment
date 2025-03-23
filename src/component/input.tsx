import {InputProps} from "../../interface"
import "../css/input.css"
export const Input = ({ mortgageAmountContainerClassName, mortgageAmountInputContainerClassName, mortgageInputCurrencyClassName, htmlFor, inputClassName, labelText, currencySign, formInputLabelClass }: InputProps) => {
	return (
		<div className={mortgageAmountContainerClassName}>
			<label className={formInputLabelClass} htmlFor={htmlFor}>{labelText}</label>
			<div className={mortgageAmountInputContainerClassName}>
				<div className={mortgageInputCurrencyClassName}>{currencySign}</div>
				<input className={inputClassName} type="text" />
		  </div>
		</div>
	)
}