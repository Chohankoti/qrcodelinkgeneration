import React, { useState } from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import { useParams } from "react-router-dom";
import "./Certificate.css";
import familyData from "./familyData";

/**
 * The Certificate component is a functional component in React that displays a family member's certificate based on the ID passed in the URL Params.
 * It allows users to download the certificate as a PNG. 
 * It uses the "useParams" hook from react-router-dom to get the ID from the URL, and then looks up the family data to find the member with the matched ID.
 * It displays the member's name and a certificate image and provides a download button.
 * The handleDownload function is used to convert the certificate to a PNG and download it when the download button is clicked.
 * @returns {JSX.Element} Returns a JSX element containing the certificate details and a download button.
 */
const Certificate = () => {
  const { id } = useParams();
  /**
   * Searches for a specific family member based on their ID in the given family data.
   * @param {Array} familyData - An array of family members' data.
   * @param {Number} id - The ID of the family member to be found, converting it from string to integer.
   * @returns {Object} Returns the family member object if found, else returns undefined.
   */
  const member = familyData.find((m) => m.id === parseInt(id, 10));
  /**
   * Handle the downloading process of the "certificateWrapper" element as a PNG.
   * This function doesn't accept any parameters and doesn't return any value.
   */
  const handleDownload = () => {
    exportComponentAsPNG(document.getElementById("certificateWrapper"), {
      html2CanvasOptions: { backgroundColor: null },
    });
  };

  return (
    <div className="Certificate">
        <div className="certificateWrapper">
          <p>{member.name}</p>
          <img src="https://i.imgur.com/zMFcb3kh.png" alt="Certificate" />
          <div className="Meta">
            <button onClick={handleDownload}>Download</button>
          </div>
        </div>
    </div>
  );
};

export default Certificate;
