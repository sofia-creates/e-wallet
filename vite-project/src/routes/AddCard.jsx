import React, { useState, useRef, useEffect } from "react";
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

  let [validationErrors, setValidationErrors] = useState([]);

  const cards = useSelector((state) => state.cards.cards);

  function handleSubmit(e) {
    e.preventDefault();

    console.log("handleSubmit is run");

    //validate
    function validate() {
      const [hasErrors, errors] = validateCardData(card, cards);

      if (hasErrors) {
        console.log("validation check failed. errors:", errors);
        setValidationErrors(errors);
        return true; // Return true to indicate there are errors
      }

      return false; // No errors
    }

    // If validation returns true (errors found), stop form submission
    if (validate()) {
      return; // Stop execution if validation failed
    }

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

  function handleCcvChange(e) {
    let value = e.target.value;
    if (value.length > 3) {
      value = value.slice(0, 3); // Limit to 3 digits
    }

    setCard((prevCard) => ({
      ...prevCard,
      ccv: value,
    }));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setCard((prevCard) => ({
      ...prevCard,
      [name]: value,
    }));
  }

  //preview related
  const cardPreviewRef = useRef(null);

  function addProviderClass() {
    if (card.cardProvider == "MasterCard") {
      cardPreviewRef.current.classList.add("masterCard");
      cardPreviewRef.current.classList.remove("visa", "americanExpress");
    } else if (card.cardProvider == "VISA") {
      cardPreviewRef.current.classList.add("visa");
      cardPreviewRef.current.classList.remove("masterCard", "americanExpress");
    } else if (card.cardProvider == "AmericanExpress") {
      cardPreviewRef.current.classList.add("americanExpress");
      cardPreviewRef.current.classList.remove("visa", "masterCard");
    }
  }

  useEffect(() => {
    addProviderClass();
  }, [card.cardProvider]);

  return (
    <div>
      {cards.length >= 4 ? (
        <h1>Maximum cardlimit reached!</h1>
      ) : (
        <>
          <h1>Add a new card</h1>
          <div ref={cardPreviewRef} id="cardPreview" className="cardDiv">
            <p>{card.cardProvider}</p>
            <p>{card.cardHolderName}</p>
            <p>{card.cardNumber}</p>
            <p>{card.expirationDate}</p>
            <p>{card.ccv}</p>
          </div>
          <div className="errorBox">
            <p>{validationErrors.cardHolderName}</p>
            <p>{validationErrors.cardNumber}</p>
            <p>{validationErrors.expirationDate}</p>
          </div>
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
            <input
              type="number"
              name="ccv"
              id="ccvInput"
              placeholder="CCV"
              onChange={handleCcvChange}
              maxLength="3"
            />
            <button type="submit">Add new card</button>
          </form>
        </>
      )}
    </div>
  );
};

export default AddCard;
