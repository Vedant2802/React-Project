import "./App.css";
import useCurrencyInfo from "./hooks/useCurrencyConverter";
import InputBox from "./components/InputBox";
import { useState, useEffect } from "react";

function App() {
  const [amount, setAmount] = useState(10);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(null);

  const currencyData = useCurrencyInfo(from);

  // Get currency options safely
  const options = currencyData ? Object.keys(currencyData) : [];

  useEffect(() => {
    if (currencyData && currencyData[to]) {
      const calculatedAmount = amount * currencyData[to].rate;
      setConvertedAmount(calculatedAmount);
    }
  }, [amount, from, to, currencyData]);

  const swapMethod = () => {
    // Swap currencies
    setFrom(to);
    setTo(from);
    // Swap amounts accordingly
    setAmount(convertedAmount || 0);
    setConvertedAmount(amount);
  };

  return (
    <>
      <h1 className="text-4xl">Currency converter</h1>
      <InputBox
        label="From"
        amount={amount}
        currencyOptions={options}
        onCurrencyChange={(currency) => setFrom(currency)}
        selectCurrency={from}
        onAmountChange={(amount) => setAmount(amount)}
      />
      <button
        onClick={swapMethod}
        className="rounded-2xl bg-green-300 cursor-pointer"
      >
        Swap
      </button>
      <InputBox
        label="To"
        amount={convertedAmount || 0}
        currencyOptions={options}
        onCurrencyChange={function (currency) {
          setTo(currency);
        }}
        selectCurrency={to}
        onAmountChange={function (amount) {
          setAmount(amount);
        }}
      />
    </>
  );
}

export default App;
