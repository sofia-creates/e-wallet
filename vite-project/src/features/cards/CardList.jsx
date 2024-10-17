import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleCardActive } from "./cardSlice";

const CardList = ({ cards }) => {
  const dispatch = useDispatch();

  //when cards are updated, rerender cardlist
  useEffect(() => {
    //console.log("cards have been updated");
  }, [cards]);

  let toggleActive = (cardNumber) => {
    console.log("toggleActive is run");
    dispatch(toggleCardActive(cardNumber));
  };

  return (
    <ul>
      {cards.map((card, index) => (
        <li key={index}>
          <p>Card Provider: {card.cardProvider}</p>
          <p>Card Holder: {card.cardHolderName}</p>
          <p>Card Number: {card.cardNumber}</p>
          <p>Expiration Date: {card.expirationDate}</p>
          <p>CCV: {card.ccv}</p>
          <button onClick={() => toggleActive(card.cardNumber)}>
            {card.active ? "Inactivate" : "Activate"}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CardList;
