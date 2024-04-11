import React from "react";
import { Link } from "react-router-dom";

const ErrorMessage = ({ message }) => {
  return (
    <div className="error-container">
      <div className="error-message">
        {message ? <p>{message}</p> : <p>Loading...</p>}
      </div>
    </div>
  );
};

export default ErrorMessage;