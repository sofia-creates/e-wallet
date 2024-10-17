import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleCardActive, deleteCard } from "./cardSlice";

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

  let deleteThisCard = (cardNumber) => {
    console.log("deleting card");
    dispatch(deleteCard(cardNumber));
  };

  return (
    <>
      {cards.length == 0 ? (
        <h2>No cards yet</h2>
      ) : (
        <section className="cardList">
          {cards.map((card, index) => (
            <div key={index} className="cardDiv">
              <p>Card Provider: {card.cardProvider}</p>
              <p>Card Holder: {card.cardHolderName}</p>
              <p>Card Number: {card.cardNumber}</p>
              <p>Expiration Date: {card.expirationDate}</p>
              <p>CCV: {card.ccv}</p>
              <button onClick={() => toggleActive(card.cardNumber)}>
                {card.active ? "Inactivate" : "Activate"}
              </button>
              <button onClick={() => deleteThisCard(card.cardNumber)}>
                Delete
              </button>
            </div>
          ))}
        </section>
      )}
    </>
  );
};

export default CardList;
