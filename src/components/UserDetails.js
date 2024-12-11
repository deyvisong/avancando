import React from "react";

const UserDetails = ({ name, age, job }) => {
  return (
    <div>
      <h2>Your name is: {name}</h2>
      <p>Age: {age}</p>
      <p>Job: {job}</p>
      <p>
        Are you eligible to get a driver's license? {age >= 18 ? "Yes" : "No"}
      </p>
    </div>
  );
};

export default UserDetails;
