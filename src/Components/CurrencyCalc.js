import React, { useState, useEffect } from "react";
import "./CurrencyCalc.css";

function CurrencyCalc() {
  const [search, setSearch] = useState("");
  const [currency, setCurrency] = useState("Please enter the currency");
  const [value, setValue] = useState("Please enter the amount and currency o convert it into");
  const fetchApi= async (val, curr) => {
    const url = `https://blockchain.info/tobtc?currency=${currency}&value=${val}`;
    const response = await fetch(url);
    const resJson = await response.json();
    console.log(resJson);
    setValue(resJson);

  }

  const getValue = () => {
    console.log("hiiiiiii", search, currency);
    fetchApi(search, currency);
    
}

  
  return (
    <>
      <div className="box">
      <input type="search" className="inputField" onChange={ (event) => {
                    setSearch(event.target.value)
                } }/>   
      <select value={currency} onChange={ (event) => {
          setCurrency(event.target.value)
        }}>
        <option>Select currency:</option>
        <option value="USD">USD</option>
        <option value="AUD">AUD</option>
        <option value="BRL">BRL</option>
        <option value="CAD">CAD</option>
        <option value="CHF">CHF</option>
        <option value="CLP">CLP</option>
        <option value="CNY">CNY</option>
        <option value="DKK">DKK</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="HKD">HKD</option>
        <option value="INR">INR</option>
        <option value="ISK">ISK</option>
        <option value="JPY">JPY</option>
        <option value="KRW">KRW</option>
        <option value="NZD">NZD</option>
        <option value="PLN">PLN</option>
        <option value="RUB">RUB</option>
        <option value="SEK">SEK</option>
        <option value="SGD">SGD</option>
        <option value="THB">THB</option>
        <option value="TRY">TRY</option>
        <option value="TWD">TWD</option>
      </select>	
      <button className="submitBtn" onClick={getValue}>Get Value</button>
      
      <div className="info">
        <h2>{value} BTC</h2>          
      </div>  

      </div>

    </>
  );
}

export default CurrencyCalc;
