export  interface ButtonProps{
	btnText: string
	btnClassName?: string
	onClick?: () => void
}
export interface InputProps {
	mortgageAmountContainerClassName: string
	mortgageAmountInputContainerClassName: string
	mortgageInputCurrencyClassName?: string
	labelText: string
	htmlFor: string
	inputClassName: string
	formInputLabelClass: string
	currencySign: string
}