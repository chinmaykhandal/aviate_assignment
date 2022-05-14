import "./App.css";
import Blockchain from "./Components/Blockchain";
import Bitcoin from "./Components/Bitcoin";
import CurrencyCalc from "./Components/CurrencyCalc";
import Visualize from "./Components/Visualize";
import Navbar from "./Components/Navbar";
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Blockchain />} />
          <Route path="/bitcoin" element={<Bitcoin />} />
          <Route path="/currencycalc" element={<CurrencyCalc />} />
          <Route path="/visualize" element={<Visualize />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
