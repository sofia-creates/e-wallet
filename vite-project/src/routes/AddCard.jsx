import React, { useState } from "react";
import { addNewCard } from "../features/cards/cardSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { validateCardData } from "../utils/validationHelpers";

const AddCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let [card, setCard] = useState({
    cardProvider: "MasterCard",
    cardHolderName: "",
    cardNumber: "",
    expirationDate: "",
    ccv: "",
  });

  const cards = useSelector((state) => state.cards.cards);

  function handleSubmit(e) {
    e.preventDefault();

    console.log("handleSubmit is run");

    //validate
    function validate() {
      const [hasErrors, errors] = validateCardData(card);

      if (hasErrors) {
        console.log("validation check failed. errors:", errors);
        return;
      }
    }

    validate();

    //addNewCard
    dispatch(addNewCard(card));

    //double check if redux state has been updated
    //console.log("cards is: ", cards);

    //empty card state
    setCard({
      cardProvider: "MasterCard",
      cardHolderName: "",
      cardNumber: "",
      expirationDate: "",
      ccv: "",
    });

    //route to Home page
    navigate("/");
  }

  function handleCardNumberChange(e) {
    let value = e.target.value.replace(/\s+/g, ""); // Remove all spaces
    if (value.length > 16) {
      value = value.slice(0, 16); // Limit to 16 digits
    }

    // Add space every 4 characters
    const formattedValue = value.replace(/(\d{4})(?=\d)/g, "$1 ");

    // Set the formatted value in state
    setCard((prevCard) => ({
      ...prevCard,
      cardNumber: formattedValue,
    }));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setCard((prevCard) => ({
      ...prevCard,
      [name]: value,
    }));
  }

  return (
    <div>
      {cards.length >= 4 ? (
        <h1>Maximum cardlimit reached!</h1>
      ) : (
        <>
          <h1>Add a new card</h1>
          <form action="" onSubmit={handleSubmit}>
            <select
              name="cardProvider"
              id="cardProviderSelect"
              onChange={handleInputChange}
              value={card.cardProvider}
            >
              <option value="MasterCard">MasterCard</option>
              <option value="VISA">VISA</option>
              <option value="AmericanExpress">American Express</option>
            </select>
            <input
              type="text"
              name="cardHolderName"
              id=""
              placeholder="Name of cardholder"
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="cardNumber"
              id=""
              placeholder="Card number"
              onChange={handleCardNumberChange}
              value={card.cardNumber}
              maxLength="19" // Allows 16 digits + 3 spaces
            />
            <label htmlFor="expirationDateInput">Expiration date</label>
            <input
              type="month"
              name="expirationDate"
              id="expirationDateInput"
              onChange={handleInputChange}
            />
            <label htmlFor="ccvInput">CCV</label>
            <input
              type="number"
              name="ccv"
              id="ccvInput"
              placeholder="CCV"
              onChange={handleInputChange}
            />
            <button type="submit">Add new card</button>
          </form>
        </>
      )}
    </div>
  );
};

export default AddCard;
