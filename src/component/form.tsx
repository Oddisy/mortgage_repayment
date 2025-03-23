import "../css/form.css"
import { Input } from "../component/input"
const Form = () =>  {
	const inputProps = {
		mortgageAmountContainerClassName: "mortgage_amount-container ",

		formInputLabel: "form-input-label",
		mortgageAmountInputContainerClassName: "mortgage_amount_input-container",
		mortgageInputCurrencyClassName: "mortgage_input-currency",
		inputClassName: "form-input-class"
	}
	return (
		<form action="">
			<div className="mortgage-duration--container">

				<Input
					htmlFor="text"
					{...inputProps}
					currencySign="$"
					labelText="Mortgage Amount"

				/>
			</div>

			<div className="mortgage-duration--container">
				<Input
					htmlFor="text"
					{...inputProps}
					labelText="Mortgage Term"
					currencySign="years"

				/>
				<Input
					htmlFor="text"
					{...inputProps}
					currencySign="%"
					labelText="Interest Rate"

				/>
			</div>
	      </form>
	)
}
export default Form 