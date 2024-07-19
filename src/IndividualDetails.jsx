// IndividualDetails.js
import React from "react";
import familyData from "./familyData";
import { useParams, useNavigate } from "react-router-dom";
import "./IndividualDetails.css"; 

/**
 * `IndividualDetails` Component is a functional component in react that fetches and displays individual member's details from the familyData object based on the given id as a route parameter. If the member does not exist, it displays "Member not found".
 * This component also facilitates navigation back to the home route.
 *
 * @returns {JSX.Element} Individual's details are structured in a table format if the member exists else displays "Member not found". The table is followed by a button that leads back to the home route when clicked.
 */
const IndividualDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  /**
   * This method takes in 'id' and returns a member from 'familyData' 
   * that matches the provided 'id'.
   * @param {Number} id - The unique identifier of the family member.
   * @returns {Object} A member object whose 'id' matches the provided 'id'. If no match is found, returns 'undefined'.
   */
  
  const member = familyData.find((m) => m.id === parseInt(id, 10));

  if (!member) {
    return <div>Member not found</div>;
  }

  /**
   * A function for navigating back to the root directory.
   * It doesn't require any parameters and doesn't return anything.
   */
  const handleBack = () => {
    navigate(`/`);
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
      /**
       * Button UI component which triggers the 'handleBack' function on click. Usually used 
       * to navigate back to a completed task in the UI.
       */
      <button onClick={() => handleBack()}>Back to Complete</button>
    </div>
  );
};

export default IndividualDetails;
