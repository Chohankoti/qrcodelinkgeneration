// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from "./Details";
import IndividualDetails from "./IndividualDetails";
import Certificate from "./Certificate";

/**
 * The App function is a React functional component that returns the main application Router. 
 * With this, we define multiple Route components for various paths in the application.
 * Each route component is assigned a specific React component (element), which will be rendered when the path is visited in a web browser.
 *
 * No parameters are accepted by this function.
 *
 * @returns {ReactElement} Returns a Router component which wraps multiple Route components each rendering a specific React component depending on the current URL.
 */
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
