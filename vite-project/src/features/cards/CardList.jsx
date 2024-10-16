import React from "react";

const CardList = ({ cards }) => {
  return (
    <ul>
      CardList
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
