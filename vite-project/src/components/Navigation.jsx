import React from "react";
import { Link } from "react-router-dom";
import walletLogoWhite from "../assets/wallet_logo_white.png";

const Navigation = () => {
  return (
    <nav>
      <Link to="/"> Home </Link>
      <img
        src={walletLogoWhite}
        alt="wallet-logo-white"
        style={{ width: "7em" }}
      />
      <Link to="/addcard"> Add a new card </Link>
    </nav>
  );
};

export default Navigation;
