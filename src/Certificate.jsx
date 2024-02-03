import React, { useState } from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import { useParams } from "react-router-dom";
import "./Certificate.css";
import familyData from "./familyData";

const Certificate = () => {
  const { id } = useParams();
  const member = familyData.find((m) => m.id === parseInt(id, 10));
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
