import { FormEvent , ChangeEvent} from "react";
import "../css/form.css";
import { Input } from "../component/input";
import { mortgageTypeData, inputProps } from "../data/formData";
import { Button } from "./button";
import { IoIosCalculator } from "react-icons/io";
import { FormProps } from "../../interface";

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
	const inputs = [
		{
			_id: "1",
			value: principal,
			onChange: (e: ChangeEvent<HTMLInputElement>) => {setPrincipal(parseFloat(e.target.value))},
			currencySign: "$",
			label:"Mortgage Amount",
			
				
			 inputClassNameLocation: "left"
		},{
			_id: "2",
			value: years,
			onChange: (e: ChangeEvent<HTMLInputElement>) => (setYears(parseFloat(e.target.value))),
			currencySign:"years",
			label: "Mortgage Type",
			mortgageInputCurrencyLocation:"right",
			 
				 inputClassNameLocation: "right"


		},{
			_id: "3",
			value: yearlyInterest ,
			onChange:(e: ChangeEvent<HTMLInputElement>) => (setYearlyInterest(parseFloat(e.target.value))),
			currencySign:"%",
			label:"Interest Rate",
			mortgageInputCurrencyLocation:"right",	
				inputClassNameLocation: "right"
				


		}]
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		if (!(principal && years && yearlyInterest)) {
			notify();
		} else {
			handleMonthlyRepayment();
		}
	};
	return (
		<form onSubmit={handleSubmit}>
			<div className="mortgage-duration--container">
				<Input

					{...inputProps}
					formInputValue={inputs[0].value || ""}
					formInputValueOnChange={inputs[0].onChange}
					htmlFor={`input-${inputs[0]._id}`}
					currencySign={inputs[0].currencySign}
					labelText={inputs[0].label}
					mortgageInputCurrencyClassName={`mortgage_input-currency ${inputs[0].mortgageInputCurrencyLocation}`}
					inputClassName="form-input-class"
					inputType= "text"
					mortgageAmountInputContainerClassName="mortgage_amount_input-container"


				/>
			</div>

			<div className="mortgage-duration--container second-container">
				{inputs.slice(1).map((item, _id) => {
					return <Input
					formInputValueOnChange={item.onChange}
					key={item._id}
					{...inputProps}
					formInputValue={item.value || ""}
					htmlFor={`input-${item._id}`}
					currencySign={item.currencySign}
					labelText={item.label}
					mortgageInputCurrencyClassName={`mortgage_input-currency ${item.mortgageInputCurrencyLocation}`}
					inputClassName={`form-input-class ${item.inputClassNameLocation}`}
					inputType="text"
					mortgageAmountInputContainerClassName="mortgage_amount_input-container"

					/>
				})

				}

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
				btnType="submit"
			/>
		</form>
	);
};
export default Form;
