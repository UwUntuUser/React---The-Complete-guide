import { useState } from "react";
import InputGroup from "./components/InputGroup";
import { calculateInvestmentResults } from "./util/investment";
import InvestmentTable from "./components/InvestmentTable";

function test() {
  return calculateInvestmentResults({
    duration: duration,
    initialInvestment: initialInvestment,
    expectedReturn: expectedReturn,
    annualInvestment: anualInvestment,
  });
}

function App() {
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [anualInvestment, setAnualInvestment] = useState(300);
  const [expectedReturn, setExpectedReturn] = useState(5.5);
  const [duration, setDuration] = useState(12);

  let tableContentValue = calculateInvestmentResults({
    duration: duration,
    initialInvestment: initialInvestment,
    expectedReturn: expectedReturn,
    annualInvestment: anualInvestment,
  });

  function handleInitialInvestment(event) {
    setInitialInvestment((initialInvestment) => +event.target.value);
  }

  function handleAnualInvestment(event) {
    setAnualInvestment((anualInvestment) => +event.target.value);
  }

  function handleExpectedReturn(event) {
    setExpectedReturn((expectedReturn) => +event.target.value);
  }

  function handleDuration(event) {
    setDuration((duration) => +event.target.value);
  }

  return (
    <>
      <div id="user-input">
        <div className="input-group">
          <InputGroup
            labelContent="INITIAL INVESTMENT"
            inputValue={initialInvestment}
            onInputChange={handleInitialInvestment}
          ></InputGroup>
          <InputGroup
            labelContent="ANUAL INVESTMENT"
            inputValue={anualInvestment}
            onInputChange={handleAnualInvestment}
          ></InputGroup>
        </div>
        <div className="input-group">
          <InputGroup
            labelContent="EXPECTED RETURN"
            inputValue={expectedReturn}
            onInputChange={handleExpectedReturn}
          ></InputGroup>
          <InputGroup
            labelContent="DURATION"
            inputValue={duration}
            onInputChange={handleDuration}
          ></InputGroup>
        </div>
      </div>
      <InvestmentTable
        id="result"
        tableContent={tableContentValue}
      ></InvestmentTable>
    </>
  );
}

export default App;
