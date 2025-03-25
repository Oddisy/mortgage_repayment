export  interface ButtonProps{
	btnText: string
	btnClassName?: string
	onClick?: () => void
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
}