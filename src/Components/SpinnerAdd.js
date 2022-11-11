import React from "react";
import Spinner from "react-bootstrap/Spinner";

const SpinnerAdd = () => {
  return (
    <div className="flex justify-center h-screen items-center">
      <Spinner animation="border" variant="success" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default SpinnerAdd;
