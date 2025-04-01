
import "../css/right_container.css";
import IllustrationEmpty from "../assets/images/illustration-empty.svg";
import { RightContainerProp } from "../../interface";

const RightContainer = ({ monthlyRepaymentDisplay }: RightContainerProp) => {
	return (
		<div className="right-container">
			{!monthlyRepaymentDisplay ? (
				<div className="right_container-child">
					<div>
						<img
							className="illustration-img"
							src={IllustrationEmpty}
							alt=""
						/>
					</div>
					<h2 className="right_container_child-result">
						Results shown here
					</h2>
					<h4 className="right_container_child-complete">
						Complete the form and click "calculate repayments " to
						see what your monthly repayments would be
					</h4>
				</div>
			) : (
				<div className="result-main-container">
					<div className="result-container--top">
						<h2>Your results </h2>
						<p className="result-container-small--text top">
							Your results are shown below based on the
							information you provided. To adjust the results,
							edit the form and click "calculate repayment" again
							.
						</p>
					</div>
					<div className="result-container--bottom">
						<div className="result-container--bottom--monthly-payment">
							<h4 className="result-container-small--text bottom">
								Your monthly repayments
							</h4>
							<h2 className="result-container--bottom--payment-display">
								{`${new Intl.NumberFormat("en-us", {
									style: "currency",
									currency: "USD",
								}).format(monthlyRepaymentDisplay || 0)}`}
							</h2>
						</div>
						<div className="result-container--bottom--total-paymemt">
							<h4 className="result-container-small--text bottom">
								Total you'll repay over the term
							</h4>
							<h3 className="">$1455555</h3>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
export default RightContainer