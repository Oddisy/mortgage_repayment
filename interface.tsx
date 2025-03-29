import { ReactElement, Dispatch, SetStateAction, ChangeEvent } from "react";

export interface ButtonProps {
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
	inputRadioValue?: string;
	formInputValue?: number;
	onChange?: (value: number) => void;
}
export interface useMonthlyPaymentProps {
	principal: number;
	yearlyInterest: number;
	years: number;
}
