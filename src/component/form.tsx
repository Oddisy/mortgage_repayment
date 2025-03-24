import "../css/form.css"
import { Input } from "../component/input"
const Form = () =>  {
	const inputProps = {
		mortgageAmountContainerClassName: "mortgage_amount-container ",
		formInputLabel: "form-input-label",
		mortgageAmountInputContainerClassName: "mortgage_amount_input-container",

		inputClassName: "form-input-class",
		formInputLabelClass: "form-input-label",

	}

	return (
		<form action="">
			<div className="mortgage-duration--container">

				<Input
					htmlFor="text"
					{...inputProps}
					currencySign="$"
					labelText="Mortgage Amount"
					mortgageInputCurrencyClassName="mortgage_input-currency left"

				/>
			</div>

			<div className="mortgage-duration--container">
				<Input
					htmlFor="text"
					{...inputProps}
					labelText="Mortgage Term"
					currencySign="years"
					mortgageInputCurrencyClassName="mortgage_input-currency right"

				/>
				<Input
					htmlFor="text"
					{...inputProps}
					currencySign="%"
					labelText="Interest Rate"
					mortgageInputCurrencyClassName="mortgage_input-currency right"

				/>
			</div>
			<div className="mortgage-type">
				<Input
					{...inputProps} />
				<Input {...inputProps />
			</div>
	      </form>
	)
}
export default Form 