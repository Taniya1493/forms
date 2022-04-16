// import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Step1 from "../screen1/Step1";
import Step2 from "../screen1/Step2";
import Step3 from "../screen1/Step3";
// import Step4 from "../screen1/Step4";
import Home from "../Home";

function Screen1() {
  return (
    <Router>
      {/* <Routes>
        <Route exact path="/" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />
      </Routes> */}
      <Routes>
        <Route exact path="/step1" element={<Step1 />}></Route>
        <Route exact path="/step2" element={<Step2 />}></Route>
        {/* <Route exact path="/contact" element={<Contact />}></Route> */}
      </Routes>
    </Router>
  );
}

export default Screen1;
