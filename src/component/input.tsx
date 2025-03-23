import {InputProps} from "../../interface"
export const Input = ({ mortgageAmountContainerClassName, mortgageAmountInputContainerClassName, mortgageInputCurrencyClassName, htmlFor, inputClassName, labelText }: InputProps) => {
	return (
		<div className={mortgageAmountContainerClassName}>
		  <label htmlFor={htmlFor}>{labelText}</label>
			<div className={mortgageAmountInputContainerClassName}>
				<div className={mortgageInputCurrencyClassName}></div>
				<input className={inputClassName} type="text" />
		  </div>
		</div>
	)
}