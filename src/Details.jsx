// Details.js
import React from "react";
import { useNavigate } from "react-router-dom";
import familyData from "./familyData";
import "./Details.css"; 

/**
 * Details is a functional React component responsible for rendering a table of family data and navigating to detailed view of a member upon button click.
 *
 * @method handleViewDetails is a method triggered upon button click, responsible for navigating to detailed view of a specific family member.
 * @param {string} id - Unique identifier for a family member.
 * @returns {void} Does not have a return value. It navigates the user to specific URL route.
 *
 * @function useNavigate is a hook from from 'react-router-dom' used to programmatically navigate to different route.
 * 
 * @return {JSX.Element}
 */
 const Details = () => {
  const navigate = useNavigate();

  /**
   * Handles the view details action and navigates to the details page of the given id.
   * @param {string|number}  id - The id of the element whose details to be viewed.
   * @returns {void} Does not return any value.
   */
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
          /**
           * Mapping each member in a family data array to a table row. 
           * Each row displays the id, name, age, relationship status, 
           * and gender of the member. There's also a button to view more 
           * details about the member.
           * @param {Object} familyData - Array of family member objects 
           * which contains id, name, age, relationship, and gender. 
           * Each object represents one family member.
           */ 
          
          {familyData.map((member) => (
            <tr key={member.id}>
              <td>{member.id}</td>
              <td>{member.name}</td>
              <td>{member.age}</td>
              <td>{member.relationship}</td>
              <td>{member.gender}</td>
              <td>
                /**
                 * Event handler for click events on a button element, ensures the display of the details of a specific member, 
                 * upon the button onclick event, by calling the 'handleViewDetails' function with the member ID as an argument.
                 */
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
