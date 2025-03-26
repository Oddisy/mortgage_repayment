import "./App.css";

import { Button } from "../src/component/button";
import Form from "./component/form";
import RightContainer from "./component/right_container";

function App() {
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
						<Form />
					</div>
					<RightContainer />
				</div>
			</div>
		</div>
	);
}

export default App;
