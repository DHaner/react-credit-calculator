import { useEffect, useState, type ChangeEvent } from "react";
import Button from "./components/Button";
import { calculateTotal, formatMoney } from "./utils";
import TextHighlight from "./components/TextHighlight";

function App() {

  const MIN = 0;
  const MAX = 10000;
  const STEP = 100;

  const [amount, setAmount] = useState(5000);
  const [total, setTotal] = useState(0);
  const [months, setMonths] = useState(3);
  const [payment, setPayment] = useState(0);

  useEffect(() => {
    const value = calculateTotal(amount, months);
    setTotal(value);

  }, [amount, months]);

  useEffect(() => {
    setPayment(total / months);
  }, [total, months]);

  function handleAmount(e: ChangeEvent<HTMLInputElement>) {
    const value = Number(e.target.value)
    setAmount(value)
  }

  function handleAddAmount() {
    const value = amount + STEP;
    if (value > MAX) return;

    setAmount(value)
  }

  function handleSubstractAmount() {
    const value = amount - STEP;
    if (value < MIN) return;

    setAmount(value)
  }

  function handleSelect(e: ChangeEvent<HTMLSelectElement>) {
    setMonths(Number(e.target.value))
  }

  return (
    <>
      <main className="h-screen w-full max-w-xl p-10 mx-auto text-center flex flex-col justify-center">
        <div className="bg-gray-800 rounded-lg p-10 flex flex-col gap-6">

          <header>
            <h1 className="text-4xl font-bold mb-6">How much
              <TextHighlight>money</TextHighlight>  do you need?
            </h1>

            <div className="flex items-center gap-6 justify-between">
              <Button
                content="-"
                onClick={handleSubstractAmount}
              />
              <input
                className="w-full h-2 rounded-lg cursor-pointer bg-gray-700 accent-blue-500 appearance-none"
                type="range"
                step={STEP}
                min={MIN}
                max={MAX}
                onChange={handleAmount}
                value={amount}
              />
              <Button content="+" onClick={handleAddAmount} />
            </div>

            <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-500 inline-flex">
              {formatMoney(amount)}
            </p>

          </header>
          <div className="space-y-2 text-xl font-bold">
            <p>Choose a <TextHighlight>payment</TextHighlight> term</p>
            <select id="months" className=" border  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 font-semibold"
              value={months}
              onChange={handleSelect}
            >
              <option value="3">3 Months</option>
              <option value="6">6 Months</option>
              <option value="12">12 Months</option>
              <option value="24">24 Months</option>
            </select>
          </div>

          <div className="bg-gray-600/70 text-gray-300 rounded-lg  font-semibold py-2">
            <h2 className="text-xl font-bold text-white">Payment <TextHighlight> resume:</TextHighlight></h2>
            <p>{months} months</p>
            <p>Total: {formatMoney(total)}</p>
            <p>Monthly Payment: {formatMoney(payment)}</p>
          </div>

        </div>

      </main>
    </>
  )
}

export default App
