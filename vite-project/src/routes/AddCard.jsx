import React, { useState } from "react";
import { addNewCard } from "../features/cards/cardSlice";
import { useDispatch } from "react-redux";

const AddCard = () => {
  //   let [cardholderName, setCardholderName] = useState("");
  //   let [cardNumber, setCardNumber] = useState("");
  //   let [expirationDate, setExpirationDate] = useState();
  //   let [ccv, setCcv] = useState();
  //   let [cardProvider, setCardProvider] = useState("");

  let [card, setCard] = useState({
    cardProvider: "",
    cardHolderName: "",
    cardNumber: "",
    expirationDate: "",
    ccv: "",
  });

  const dispatch = useDispatch();

  function handleSubmit() {
    event.preventDefault();

    console.log("handleSubmit is run");
    //addNewCard
    dispatch(addNewCard(card));

    //double check if redux state has been updated
    //console.log("cards is: ", cards);

    //empty card state
    setCard({
      cardProvider: "",
      cardHolderName: "",
      cardNumber: "",
      expirationDate: "",
      ccv: "",
    });
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
      <h1>Add a new card</h1>
      <form action="" onSubmit={handleSubmit}>
        <select
          name="cardProvider"
          id="cardProviderSelect"
          onChange={handleInputChange}
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
          type="number"
          name="cardNumber"
          id=""
          placeholder="Card number"
          onChange={handleInputChange}
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
    </div>
  );
};

export default AddCard;
