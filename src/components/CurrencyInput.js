import React, { useState } from "react";

const CurrencyInput = ({
  onSubmit,
  convertedCurrency,
  setConvertedCurrency,
  setErrorMessage
}) => {
  const [inputValue, setInputValue] = useState("");
  const isDisabled = !inputValue.trim();

  const handleChange = (e) => {
    setConvertedCurrency("");
    setErrorMessage("");
    const regex = /^[0-9,]*$/;
    if (regex.test(e.target.value)) {
      setInputValue(e.target.value);
    }
  };

  const handleClick = () => {
    if (!isDisabled) onSubmit(inputValue);
  };

  return (
    <div className="currency-input-wrapper">
      <div className="input_button">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter amount (e.g. 999,999,999.99)"
        />
        <button onClick={handleClick} disabled={isDisabled} >
          Convert
        </button>
      </div>
      {convertedCurrency && (
        <p>
          <span className="subtitle">Converted currency: </span>
          <span>{convertedCurrency}</span>
        </p>
      )}
    </div>
    
  );
};

export default CurrencyInput;
