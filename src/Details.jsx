// Details.js
import React from "react";
import { useNavigate } from "react-router-dom";
import familyData from "./familyData";
import "./Details.css"; 

const Details = () => {
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/details/${id}`);
  };

  return (
      <table className="family-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Relationship</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {familyData.map((member) => (
            <tr key={member.id}>
              <td>{member.id}</td>
              <td>{member.name}</td>
              <td>{member.age}</td>
              <td>{member.relationship}</td>
              <td>{member.gender}</td>
              <td>
                <button onClick={() => handleViewDetails(member.id)}>
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  );
};

export default Details;
