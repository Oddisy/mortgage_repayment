
import "../css/right_container.css";
import IllustrationEmpty from "../assets/images/illustration-empty.svg";
import { RightContainerProp } from "../../interface";

const RightContainer = ({ monthlyRepaymentDisplay }: RightContainerProp) => {
	return (
		<div className="right-container">
			<div className="right_container-child">
				<div>
					<img
						className="illustration-img"
						src={IllustrationEmpty}
						alt=""
					/>
				</div>
				<h2 className="right_container_child-result">
					{`$${monthlyRepaymentDisplay?.toFixed(2) || "0"}`}
				</h2>
				<h4 className="right_container_child-complete">
					Complete the form and click "calculate repayments " to see
					what your monthly repayments would be{" "}
				</h4>
			</div>
		</div>
	);
};
export default RightContainer