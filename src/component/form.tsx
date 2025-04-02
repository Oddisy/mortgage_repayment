import { FormEvent, useMemo } from "react";
import "../css/form.css";
import { Input } from "../component/input";
import { mortgageTypeData, inputProps } from "../data/formData";
import { Button } from "./button";
import { IoIosCalculator } from "react-icons/io";
import { FormProps } from "../../interface";
import { ToastContainer } from "react-toastify";

const Form = ({
	principal,
	setPrincipal,
	years,
	setYears,
	yearlyInterest,
	setYearlyInterest,
	handleMonthlyRepayment,
	notify,
}: FormProps) => {
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		handleMonthlyRepayment();
		if (!(principal && years && yearlyInterest)) {
			notify();
		}
	};
	return (
		<form onSubmit={handleSubmit}>
			<ToastContainer />
			<div className="mortgage-duration--container">
				<Input
					formInputValue={principal || ""}
					formInputValueOnChange={(e) =>
						setPrincipal(parseFloat(e.target.value))
					}
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
					formInputValue={years || ""}
					htmlFor="text"
					{...inputProps}
					labelText="Mortgage Type"
					currencySign="years"
					mortgageInputCurrencyClassName="mortgage_input-currency right"
					inputType="text"
					mortgageAmountInputContainerClassName="mortgage_amount_input-container"
					inputClassName="form-input-class right"
					formInputValueOnChange={(e) =>
						setYears(parseFloat(e.target.value))
					}
				/>
				<Input
					formInputValue={yearlyInterest || ""}
					htmlFor="text"
					{...inputProps}
					currencySign="%"
					labelText="Interest Rate"
					mortgageInputCurrencyClassName="mortgage_input-currency right"
					inputType="text"
					mortgageAmountInputContainerClassName="mortgage_amount_input-container"
					inputClassName="form-input-class right"
					formInputValueOnChange={(e) =>
						setYearlyInterest(parseFloat(e.target.value))
					}
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
				disabled={!(principal && years && yearlyInterest)}
				btnIcon={<IoIosCalculator />}
				btnClassName="form-submit--button"
				btnText="Calculate Repayments"
				btnType="submit"
			/>
		</form>
	);
};
export default Form;
