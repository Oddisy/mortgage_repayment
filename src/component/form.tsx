import "../css/form.css"
import { Input } from "../component/input"
import { mortgageTypeData, inputProps } from "../data/formData"
const Form = () =>  {


	return (
		<form action="">
			<div className="mortgage-duration--container">

				<Input
					htmlFor="text"
					{...inputProps}
					currencySign="$"
					labelText="Mortgage Amount"
					mortgageInputCurrencyClassName="mortgage_input-currency left"
					inputClassName="form-input-class"
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
					inputClassName="form-input-class right"

				/>
				<Input
					htmlFor="text"
					{...inputProps}
					currencySign="%"
					labelText="Interest Rate"
					mortgageInputCurrencyClassName="mortgage_input-currency right"
					inputType="text"
					mortgageAmountInputContainerClassName="mortgage_amount_input-container"
					inputClassName="form-input-class right"
				/>
			</div>
			<div className="mortgage-type">
				{mortgageTypeData.map((item, index) => (
					<div key={index} className="mortage-type--repayment">
					<div className="mortgage-type--repayment-text">
						<Input

							{...inputProps}
							labelText="Mortgage Term"
							inputType="radio"
							mortgageAmountInputContainerClassName="mortgage_amount_input-container radio"
								mortgageType={item.mortgageTypeText}
								inputClassName="form-input-class" />

					</div>
					</div>))}
			</div>
	      </form>
	)
}
export default Form 