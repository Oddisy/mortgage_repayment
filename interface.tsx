import { ReactElement } from "react";

export  interface ButtonProps {
	btnText: string;
	btnClassName?: string;
	btnIcon?: ReactElement;
	onClick?: () => void;
}
export interface InputProps {
	mortgageAmountContainerClass: string;
	mortgageAmountInputContainerClassName: string;
	mortgageInputCurrencyClassName?: string;
	labelText?: string;
	htmlFor?: string;
	inputClassName: string;
	formInputLabelClass: string;
	currencySign?: string;
	inputType: string;
	mortgageType?: string;
	inputRadioName?: string;
	inputRadioValue?: string
}