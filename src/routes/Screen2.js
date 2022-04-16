import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Step1 from "../screen1/Step1";
import Step2 from "../screen1/Step2";
import Step3 from "../screen1/Step3";

export default function Screen2() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Step1 />} />
          <Route path="/step2" element={<Step2 />} />
          <Route path="/step3" element={<Step3 />} />
        </Routes>
      </Router>
    </div>
  );
}
