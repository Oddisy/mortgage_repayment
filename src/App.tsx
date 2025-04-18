import { useEffect, useState } from "react";
import "./App.css";
import { Button } from "../src/component/button";
import Form from "./component/form";
import RightContainer from "./component/right_container";
import { useMonthlyPayment } from "./component/hooks/useMonthlyPayment";
import { ToastContainer, toast } from "react-toastify";
function App() {
	const [principal, setPrincipal] = useState(0);
	const [years, setYears] = useState(0);
	const [yearlyInterest, setYearlyInterest] = useState(0);
	const [monthlyRepaymentDisplay, setMonthlyRepaymentDisplay] =
		useState<number>();
		const [error, setError] = useState<boolean>(false)
		const [totalRepayment, setTotalRepayment] = useState<number>();
		const { calculateMonthlyPayment, calculateTotalMonthlyRepayment } =
			useMonthlyPayment({
				yearlyInterest,
				years,
				principal,
			});
		useEffect(() => {
			setTotalRepayment(calculateTotalMonthlyRepayment);
		}, [calculateTotalMonthlyRepayment, years]);
	const handleMonthlyRepayment = () => {
		const result = calculateMonthlyPayment();
		setMonthlyRepaymentDisplay(result);
	};
	const notify = () => toast("please input your loan data ");

	return (
		<div className="container">
			<ToastContainer />
			<div className="container_sub-container">
				<div className="content-container">
					<div className="left-container">
						<div className="left_container_calculator-container">
							<h1>Mortgage Calculator</h1>
							<Button
								btnClassName="cancel-all"
								btnText="Cancel All"
							/>
						</div>
						<Form
							principal={principal}
							setPrincipal={setPrincipal}
							years={years}
							setYears={setYears}
							yearlyInterest={yearlyInterest}
							setYearlyInterest={setYearlyInterest}
							handleMonthlyRepayment={handleMonthlyRepayment}
							notify={notify}
							error={error}
							setError={setError}
						/>
					</div>
					<RightContainer
						monthlyRepaymentDisplay={monthlyRepaymentDisplay}
						totalRepayment={totalRepayment}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
