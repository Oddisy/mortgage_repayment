import { useState } from "react";
import "./App.css";
import { Button } from "../src/component/button";
import Form from "./component/form";
import RightContainer from "./component/right_container";
import { useMonthlyPayment } from "./component/hooks/useMonthlyPayment";

function App() {
		
		const [principal, setPrincipal] = useState(0);
		const [years, setYears] = useState(0);
		const [yearlyInterest, setYearlyInterest] = useState(0);
		const monthlyPaymentInput = useMonthlyPayment({
			yearlyInterest,
			years,
			principal,
		});

		return (
			<div className="container">
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
								setYears={setYears}
								setYearlyInterest={setYearlyInterest}
							/>
						</div>
						<RightContainer />
					</div>
				</div>
			</div>
		);
}

export default App;
