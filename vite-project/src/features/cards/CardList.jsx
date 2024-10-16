import React from "react";
import { useEffect } from "react";

const CardList = ({ cards }) => {
  //when cards are updated, rerender cardlist
  useEffect(() => {
    //console.log("cards have been updated");
  }, [cards]);

  return (
    <ul>
      {cards.map((card, index) => (
        <li key={index}>
          <p>Card Provider: {card.cardProvider}</p>
          <p>Card Holder: {card.cardHolderName}</p>
          <p>Card Number: {card.cardNumber}</p>
          <p>Expiration Date: {card.expirationDate}</p>
          <p>CCV: {card.ccv}</p>
        </li>
      ))}
    </ul>
  );
};

export default CardList;
