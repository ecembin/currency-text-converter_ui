import React, { useState } from "react";
import CurrencyInput from "./components/CurrencyInput";
import "./App.css";

const App = () => {
  const [convertedCurrency, setConvertedCurrency] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (value) => {
    fetch(`https://localhost:7238/ConvertCurrency/ConvertToAmount?amount=${value}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setConvertedCurrency(data?.converterResult)
    })
    .catch(error => {
      setErrorMessage("Invalid currency");
    });
  };

  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <CurrencyInput
        onSubmit={handleSubmit}
        convertedCurrency={convertedCurrency}
        setConvertedCurrency={setConvertedCurrency}
        setErrorMessage={setErrorMessage}
      />
      <p className="error-message">{errorMessage}</p>
    </div>
  );
};

export default App;
