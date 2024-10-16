import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Link to="/"> Home </Link>
      <Link to="/addcard"> Add a new card </Link>
    </div>
  );
};

export default Navigation;
