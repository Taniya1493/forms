import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Screen1 from "./routes/Screen1";
import Screen2 from "./routes/Screen2";
// import Home from "./Home";

function App() {
  return (
    // <div className="App">
    //   <Router>
    //     <Routes>
    //       <Route exact path="/" element={<Home />} />
    //       <Route path="/screen1" element={<Screen1 />} />
    //       <Route path="/screen2" element={<Screen2 />} />
    //     </Routes>
    //   </Router>
    // </div>
    <Screen2 />
  );
}

export default App;
