import React from "react";
import { Link } from "react-router-dom";
import CardList from "../features/cards/CardList";
import { useState } from "react";
import { useSelector } from "react-redux";

//Show the existing cards, and a button to create new card

const Home = () => {
  const cards = useSelector((state) => state.cards.cards);

  return (
    <div>
      <h1>Welcome to your eWallet</h1>
      <CardList cards={cards} />
    </div>
  );
};

export default Home;
