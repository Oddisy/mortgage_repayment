import "../css/form.css"
import { Input } from "../component/input"
const Form = () =>  {
	const inputProps = {
		mortgageAmountContainerClassName: "mortgage_amount-container ",


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

					inputType="text"
					mortgageAmountInputContainerClassName="mortgage_amount_input-container"

				/>
			</div>

			<div className="mortgage-duration--container">
				<Input
					htmlFor="text"
					{...inputProps}
					labelText="Mortgage Type"
					currencySign="years"
					mortgageInputCurrencyClassName="mortgage_input-currency right"
					inputType="text"
					mortgageAmountInputContainerClassName="mortgage_amount_input-container"

				/>
				<Input
					htmlFor="text"
					{...inputProps}
					currencySign="%"
					labelText="Interest Rate"
					mortgageInputCurrencyClassName="mortgage_input-currency right"
					inputType="text"
					mortgageAmountInputContainerClassName="mortgage_amount_input-container"

				/>
			</div>
			<div className="mortgage-type">
				<div className="mortage-type--repayment">
					<div className="mortgage-type--repayment-text">
						<Input
							{...inputProps}
							labelText="Mortgage Term"
							inputType="radio"
							mortgageAmountInputContainerClassName="mortgage_amount_input-container radio"
							mortgageType="Repayment" />

					</div>
				</div>
				<div className="mortage-type--repayment">
					<div className="mortgage-type--repayment-text">
						<Input
							{...inputProps}

							inputType="radio"
							mortgageAmountInputContainerClassName="mortgage_amount_input-container radio"
							mortgageType="Interest " />

					</div>
				</div>
			</div>
	      </form>
	)
}
export default Form 