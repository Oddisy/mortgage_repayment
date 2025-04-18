import { ReactElement } from "react";

export interface ButtonProps {
	btnText: string;
	btnClassName?: string;
	btnIcon?: ReactElement;
	btnType?: string;
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
	formInputValue?: string | number;
	formInputValueOnChange?: (value: number) => void;
}
export interface FormProps {
	principal: number;
	setPrincipal?: (value: number) => void;
	years?: number;
	setYears?: (value: number) => void;
	yearlyInterest?: string;
	setYearlyInterest?: (value: number) => void;
}
export interface useMonthlyPaymentProps {
	principal: number;
	yearlyInterest: number;
	years: number;
}
