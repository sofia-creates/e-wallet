import React from "react";
import { Link } from "react-router-dom";
import CardList from "../features/cards/CardList";
import { useState } from "react";
import { useSelector } from "react-redux";

//Den här ska visa ut korten som finns, plus knapp som går till att skapa ett nytt kort

const Home = () => {
  //get cards from localStorage
  const cards = useSelector((state) => state.cards.cards);

  return (
    <div>
      <h1>Home</h1>
      <h2>Your cards</h2>
      <CardList cards={cards} />
    </div>
  );
};

export default Home;
