import "../css/form.css"
import Input from "../component/input"
const Form = () =>  {
	return (
		<form action="">
		<div className="mortgage_amount-container ">
		  <label htmlFor="" className="input-label">Mortgage Amount</label>
		  <div className="mortgage_amount_input-container">
		    <div className="mortgage_input-currency">$</div>
		    <input type="text" className="input-class-name" />
		  </div>
		</div>
			<Input mortgageAmountContainerClassName="mortgage_amount-container "
				mortgageAmountInputContainerClassName="mortgage_amount_input-container" />
	      </form>
	)
}
export default Form 