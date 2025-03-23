import "./App.css"
import IllustrationEmpty from "../src/assets/images/illustration-empty.svg"
import { Button } from "../src/component/button"
import Form from "./component/form"

function App() {


  return (
    
    <div className="container">
      <div className="container_sub-container">
        <div className="content-container">
          <div className="left-container">
            <div className="left_container_calculator-container"><h1>Mortgage Calculator</h1>
              <Button btnClassName="cancel-all" btnText="Cancel All" /></div>
            <Form />
          </div>
          <div className="right-container">
            <div className="right_container-child">
              <div><img className="illustration-img" src={IllustrationEmpty} alt="" /></div>
              <h2 className="right_container_child-result">Results shown here</h2>
              <h4 className="right_container_child-complete">Complete the form and click "calculate repayments " to see what your monthly repayments would be </h4>
            </div>
          </div>
      </div>
      </div>
    </div>

  
  )
}

export default App
