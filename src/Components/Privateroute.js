import React from "react";
import { Navigate } from "react-router-dom";

const Privateroute = ({ login, children }) => {
  if (login) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default Privateroute;
