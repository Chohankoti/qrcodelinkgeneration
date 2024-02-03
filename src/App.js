// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from "./Details";
import IndividualDetails from "./IndividualDetails";
import Certificate from "./Certificate";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Details />} />
        <Route path="/details/:id" element={<IndividualDetails />} />
        <Route path="/certificate/:id" element={<Certificate/>}/>
      </Routes>
    </Router>
  );
}
