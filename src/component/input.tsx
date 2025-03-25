import {InputProps} from "../../interface"
import "../css/input.css"
export const Input = ({
	mortgageAmountContainerClass,
	mortgageAmountInputContainerClassName,
	mortgageInputCurrencyClassName,
	htmlFor,
	inputClassName,
	labelText,
	currencySign,
	formInputLabelClass,
	inputType,
	mortgageType,
}: InputProps) => {
	return (
		<div className={mortgageAmountContainerClass}>
			<label className={formInputLabelClass} htmlFor={htmlFor}>
				{labelText}
			</label>
			{inputType === "text" ? (
				<div className={mortgageAmountInputContainerClassName}>
					<div className={mortgageInputCurrencyClassName}>
						{currencySign}
					</div>
					<input className={inputClassName} type={inputType} />
				</div>
			) : (
				<div className="mortgageRadioContainer">
					<div className={mortgageAmountInputContainerClassName}>
						<input className={inputClassName} type={inputType} />
						<p>{mortgageType}</p>
					</div>
				</div>
			)}
		</div>
	);
};