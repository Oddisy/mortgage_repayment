
import IllustrationEmpty from "../src/assets/images/illustration-empty.svg"
const RightContainer = () => {
	return(
		  <div className="right-container">
		    <div className="right_container-child">
		      <div><img className="illustration-img" src={IllustrationEmpty} alt="" /></div>
		      <h2 className="right_container_child-result">Results shown here</h2>
		      <h4 className="right_container_child-complete">Complete the form and click "calculate repayments " to see what your monthly repayments would be </h4>
		    </div>
		  </div>)
}
export default RightContainer