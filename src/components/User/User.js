import React from "react";
import './User.css';

const User = ({ details }) => {
  return (
    <div className="user-ct">
      <div className="user-img">
        <img
          src={details.thumbnail}
          alt={details.name}
        />
      </div>
      <div className="user-details">
        <strong>{details.name}</strong>
        <br />
        <small>{details.email}</small>
      </div>
    </div>
  );
};

export default User;
