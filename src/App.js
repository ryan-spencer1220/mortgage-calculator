import { useState } from "react";
import "./index.css";

function App() {
  const [purchasePrice, setPurchasePrice] = useState(450000);
  const [downPayment, setDownPayment] = useState(50000);
  const [repaymentTime, setRepaymentTime] = useState(20);
  const [interestRate, setInterestRate] = useState(3.5);
  const [loan, setLoan] = useState(0);
  const [mortgage, setMortgage] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const principle = purchasePrice - downPayment;
    const adjustedInterest = interestRate * 0.01;
    const numerator =
      adjustedInterest * Math.pow(1 + adjustedInterest, repaymentTime * 12);
    const denominator = Math.pow(1 + adjustedInterest, repaymentTime * 12) - 1;
    const mortgageAmount = parseFloat(
      principle * (numerator / denominator)
    ).toFixed(0);
    setMortgage(mortgageAmount);
    const loanAmount = parseFloat(mortgageAmount * repaymentTime * 12).toFixed(
      0
    );
    setLoan(loanAmount);
    console.log(loan);
  };

  return (
    <>
      <div className="container flex flex-row mt-20 lg:m-44">
        <div className="flex flex-col lg:mt-16 lg:w-1/3 xl:mb-52 mr-20">
          <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">
            Mortgage Calculator
          </h1>
          <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-right">
            Mortgage Calculator
          </h1>
          <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-center">
            Mortgage Calculator
          </h1>
        </div>
        <div className="flex flex-col lg:mt-16 lg:w-1/2 xl:mb-52">
          <div className="card card-bordered border-white border-8 bg-neutral-content text-neutral shadow-xl p-10 ">
            <h1 className="card-title">Please enter values below</h1>
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="flex flex-row gap-4">
                <div className="basis-1/2">
                  <div className="space-x-4">
                    <label className="font-bold">
                      Purchase Price: ${purchasePrice}
                    </label>
                    <input
                      type="range"
                      defaultValue="450000"
                      min="0"
                      max="1000000"
                      step="10000"
                      value={purchasePrice}
                      className="range range-primary"
                      onChange={(e) => setPurchasePrice(e.target.value)}
                    />
                  </div>
                  <div className="space-x-4">
                    <label className="font-bold">
                      Down Payment: ${downPayment}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max={purchasePrice}
                      step="10000"
                      value={downPayment}
                      className="range range-primary"
                      onChange={(e) => setDownPayment(e.target.value)}
                    />
                  </div>
                  <div className="space-x-4">
                    <label className="font-bold">
                      Repayment time: {repaymentTime} Years
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="30"
                      step="5"
                      value={repaymentTime}
                      className="range range-primary"
                      onChange={(e) => setRepaymentTime(e.target.value)}
                    />
                  </div>
                  <div className="space-x-4">
                    <label className="font-bold">
                      Interest Rate: {interestRate}%
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="6"
                      step=".1"
                      value={interestRate}
                      className="range range-primary"
                      onChange={(e) => setInterestRate(e.target.value)}
                    />
                  </div>
                  <button className="btn btn-lg btn-primary mt-4 -mb-10">
                    Submit
                  </button>
                </div>
                <div className="basis-1/2 space-y-4">
                  <div className="stats shadow">
                    <div className="stat">
                      <div className="stat-title">Monthly Mortgage Payment</div>
                      <div className="stat-value">${mortgage}</div>
                    </div>
                  </div>
                  <div className="stats shadow">
                    <div className="stat">
                      <div className="stat-title">Loan Amount</div>
                      <div className="stat-value">${loan}</div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
