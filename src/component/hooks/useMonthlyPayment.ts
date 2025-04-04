import { useCallback } from "react";
import { useMonthlyPaymentProps } from "../../../interface";

export const useMonthlyPayment = ({
	principal,
	yearlyInterest,
	years,
	
}: useMonthlyPaymentProps) => {


	const calculateMonthlyPayment = useCallback(() => {
		const monthlyInterest = yearlyInterest / 100 / 12;
		const totalPaymentMonths = years * 12;
	
		const actualPayment =
			(principal *
				monthlyInterest *
				Math.pow(1 + monthlyInterest, totalPaymentMonths)) /
			(Math.pow(1 + monthlyInterest, totalPaymentMonths) - 1)
		return actualPayment
	}, [principal, yearlyInterest, years]);
	const calculateTotalMonthlyRepayment = useCallback(() => {
		const actualMonthlyRepayment = calculateMonthlyPayment()
		const totalMonthlyRepayment =  actualMonthlyRepayment * years * 12
		return totalMonthlyRepayment
		
	}, [calculateMonthlyPayment, years])
	return {calculateMonthlyPayment , calculateTotalMonthlyRepayment}
};


