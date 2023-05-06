import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Booking from "./pages/Booking/Booking";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </div>
  );
}

export default App;
