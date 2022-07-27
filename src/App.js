import React from "react";
import "../src/components/App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "firebase/auth";
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Signup />}></Route>
          <Route exact path="/Login" element={<Login />}></Route>
          <Route path="/Home" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

// <Router>
//   <div className="App">
//     <Navbar />
//     <Routes>
//       <Route path="/Homepage" element={<Homepage />} />
//       <Route path="/Hotel" element={<Hotel />} />
//       <Route path="/Restaurant" element={<Restaurant />} />
//       <Route path="/Contact" element={<Contact />} />
//     </Routes>
//   </div>
// </Router>;

export default App;
