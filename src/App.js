// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ServicesPage from "./ServicesPage";
import Navbar from "./Navbar"; // ✅ Import your Navbar component
import "./App.css"; // ✅ Global styles
import AppointmentsPage from "./appointment"; // ✅ Import it
import InventoryPage from "./Inventory"; // ✅ Import it

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar /> {/* ✅ Use the imported Navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ServicesPage" element={<ServicesPage />} />
          <Route path="/appointment" element={<AppointmentsPage />} /> {/* ✅ Add this */}
          <Route path="/inventory" element={<InventoryPage />} /> {/* ✅ Add this */}
          
          {/* Add more routes here */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
