// IndividualDetails.js
import React from "react";
import familyData from "./familyData";
import { useParams, useNavigate } from "react-router-dom";
import "./IndividualDetails.css"; // Import the external stylesheet

const IndividualDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const member = familyData.find((m) => m.id === parseInt(id, 10));

  if (!member) {
    return <div>Member not found</div>;
  }

  const handleBack = () => {
    navigate(`../details`);
  };

  return (
    <div>
      <table className="individual-details-table">
        <tbody>
          <tr>
            <td>ID:</td>
            <td>{member.id}</td>
          </tr>
          <tr>
            <td>Name:</td>
            <td>{member.name}</td>
          </tr>
          <tr>
            <td>Age:</td>
            <td>{member.age}</td>
          </tr>
          <tr>
            <td>Relationship:</td>
            <td>{member.relationship}</td>
          </tr>
          <tr>
            <td>Gender:</td>
            <td>{member.gender}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => handleBack()}>Back</button>
    </div>
  );
};

export default IndividualDetails;
