import { ReactElement } from "react";

export interface ButtonProps {
	btnText: string;
	btnClassName?: string;
	btnIcon?: ReactElement;
	onClick?: () => void;
}
export interface MonthlyPaymentInputProps {
	principal?: number;
	years?: number;
	yearlyInterest?: string;
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
	formInputValue?: string | number | undefined;
	formInputValueOnChange?: (value: number) => void;
}
export interface FormProps {
	setPrincipal?: (value: number) => void;
	setYears?: (value: number) => void;
	setYearlyInterest?: (value: number) => void;
	MonthlyPaymentInputProps?: string;
}
export interface useMonthlyPaymentProps {
	principal: number;
	yearlyInterest: number;
	years: number;
}
