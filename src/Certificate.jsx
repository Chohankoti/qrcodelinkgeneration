import React, { useState } from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import "./Certificate.css";
import familyData from "./familyData";

const Certificate = () => {
  const handleDownload = () => {
    exportComponentAsPNG(document.getElementById("certificateWrapper"), {
      html2CanvasOptions: { backgroundColor: null },
    });
  };

  return (
    <div className="Certificate">
      {familyData.map((member, index) => (
        <div key={index} className="certificateWrapper">
          <p>{member.name}</p>
          <img src="https://i.imgur.com/zMFcb3kh.png" alt="Certificate" />
          <div className="Meta">
            <button onClick={handleDownload}>Download</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certificate;
