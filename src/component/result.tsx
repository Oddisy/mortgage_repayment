import { useCallback, useState } from "react";

// const Result = () => {
// 	const [loanAmount, setLoanAmount] = useState(300000);
// 	const [years, setYears] = useState(25);
// 	const [annualInterestRate, setAnnualInterestRate] = useState(5);

// 	const monthlyInterestRate = annualInterestRate / 100 / 12;
// 	const totalPayments = years * 12;

// 	const monthlyRepayment = (
// 		(loanAmount *
// 			monthlyInterestRate *
// 			Math.pow(1 + monthlyInterestRate, totalPayments)) /
// 		(Math.pow(1 + monthlyInterestRate, totalPayments) - 1)
// 	).toFixed(2);

// 	return (
// 		<div className="p-4 bg-gray-100 rounded-md shadow-md">
// 			<h2 className="text-xl font-bold mb-2">Mortgage Calculator</h2>
// 			<label className="block mb-2">
// 				Loan Amount:
// 				<input
// 					type="number"
// 					value={loanAmount}
// 					onChange={(e) => setLoanAmount(Number(e.target.value))}
// 					className="block w-full p-2 border rounded-md"
// 				/>
// 			</label>
// 			<label className="block mb-2">
// 				Term (Years):
// 				<input
// 					type="number"
// 					value={years}
// 					onChange={(e) => setYears(Number(e.target.value))}
// 					className="block w-full p-2 border rounded-md"
// 				/>
// 			</label>
// 			<label className="block mb-2">
// 				Interest Rate (%):
// 				<input
// 					type="number"
// 					value={annualInterestRate}
// 					onChange={(e) =>
// 						setAnnualInterestRate(Number(e.target.value))
// 					}
// 					className="block w-full p-2 border rounded-md"
// 				/>
// 			</label>
// 			<p className="mt-2 text-lg font-semibold">
// 				Monthly Repayment: ${monthlyRepayment}
// 			</p>
// 		</div>
// 	);
// };

// export default Result;

// const Result =  () => {
// 	return (
// 		<div>
// 			<h2>Your results</h2>
// 			<p>
// 				Your results are shown below based on the information you
// 				provided. To adjust the result , edit the form and click "
// 				claculate repayments " again.
// 			</p>
// 			<div>
// 				<div className="">
// 					<div>
// 						<p>Your monthly repayments </p>
// 						<h3>5000k</h3>
// 					</div>
// 					<div>
// 						<p>Total you'll repay over the term</p>
// 						<h3>10000k</h3>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
// export default Result
