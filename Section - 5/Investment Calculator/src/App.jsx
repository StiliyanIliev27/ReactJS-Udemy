import UserInput from "./components/UserInput";
import { calculateInvestmentResults, formatter } from "./util/investment";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  });

  function handleInputChange(identifier, value) {
    setUserInput((prevInput) => ({
      ...prevInput,
      [identifier]: +value,
    }));
  }

  const result =
    userInput.initialInvestment &&
    userInput.annualInvestment &&
    userInput.expectedReturn &&
    userInput.duration
      ? calculateInvestmentResults(userInput)
      : [];

  return (
    <>
      <UserInput onInputChange={handleInputChange} userInput={userInput} />
      <table id="result">
        <thead>
          <tr>
            <td>Year</td>
            <td>Investment value</td>
            <td>Interest (Year)</td>
            <td>Total Interest</td>
            <td>Invested Capital</td>
          </tr>
        </thead>
        <tbody>
          {result.length > 0 &&
            result.map((item, index) => (
              <tr key={index}>
                <td>{item.year}</td>
                <td>{formatter.format(item.valueEndOfYear)}</td>
                <td>{formatter.format(item.interest)}</td>
                <td>{formatter.format(item.annualInvestment)}</td>
                <td>
                  {formatter.format(
                    item.valueEndOfYear - item.annualInvestment
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
