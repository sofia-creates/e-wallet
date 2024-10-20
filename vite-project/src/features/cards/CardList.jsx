import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleCardActive, deleteCard } from "./cardSlice";
import { useNavigate } from "react-router-dom";

const CardList = ({ cards }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  //translate cardProvider in card to correct css class, due to different syntax rules between the languages
  const getProviderClass = (provider) => {
    switch (provider) {
      case "MasterCard":
        return "masterCard";
      case "VISA":
        return "visa";
      case "AmericanExpress":
        return "americanExpress";
      default:
        return ""; // Fallback class
    }
  };

  function goToAddCard() {
    navigate("/addcard");
  }

  return (
    <div id="card-list">
      {cards.length == 0 ? (
        <>
          <h2>
            <i>No cards yet</i>
          </h2>
          <button onClick={goToAddCard}>Lets add some cards!</button>
        </>
      ) : (
        <>
          <h2>Your cards</h2>
          <section className="cardList">
            {cards.map((card, index) => (
              <div className="cardContainer" key={index}>
                <div
                  className={`cardDiv ${getProviderClass(card.cardProvider)}`}
                >
                  <p>{card.cardProvider}</p>
                  <p>{card.cardNumber}</p>
                  <p>{card.expirationDate}</p>
                  <p>{card.cardHolderName}</p>
                  <p>CCV: {card.ccv}</p>
                  {/* <img src="assets/" alt="" /> */}
                </div>
                <button onClick={() => toggleActive(card.cardNumber)}>
                  {card.active ? "Inactivate" : "Activate"}
                </button>
                <button onClick={() => deleteThisCard(card.cardNumber)}>
                  Delete
                </button>
              </div>
            ))}
          </section>
        </>
      )}
    </div>
  );
};

export default CardList;
