import { useState } from "react";
import "../css/form.css";
import { Input } from "../component/input";
import { mortgageTypeData, inputProps } from "../data/formData";
import { Button } from "./button";
import { IoIosCalculator } from "react-icons/io";
import { useMonthlyPayment } from "../component/hooks/useMonthlyPayment";
const Form = () => {
	const [principal, setPrincipal] = useState<number>(0);
	const [years, setYears] = useState<number>(0);
	const [yearlyInterest, setYearlyInterest] = useState<number>(0);
	return (
		<form action="">
			<div className="mortgage-duration--container">
				<Input
					formInputValue={principal}
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
			<div className="mortgage-type--container">
				{mortgageTypeData.map((item, index) => (
					<div key={index} className="mortgage-type--repayment">
						<div className="mortgage-type--repayment-text">
							<Input
								{...inputProps}
								labelText={item.labelText}
								inputType="radio"
								mortgageAmountInputContainerClassName="mortgage_amount_input-container radio"
								mortgageType={item.mortgageTypeText}
								inputClassName="form-input-class"
								inputRadioName={item.inputRadioName}
								inputRadioValue={item.inputRadioValue}
							/>
						</div>
					</div>
				))}
			</div>
			<Button
				btnIcon={<IoIosCalculator />}
				btnClassName="form-submit--button"
				btnText="Calculate Repayments"
			/>
			<p>{monthlyPayment}</p>
		</form>
	);
};
export default Form;
