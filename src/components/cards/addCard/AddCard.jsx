import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import { addACard, getKey } from "../cardListSlice";
import { useEffect } from "react";
import Card from "../Card";

//HAR PILLAT NU, Funkar

const AddCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userName } = useSelector((state) => state.user);
  const { cards } = useSelector((state) => state.cardList);

  const [card, setCard] = useState({
    cardHolder: userName,
    cardNumber: "",
    validThru: "",
    ccv: "",
    vendor: "",
    active: false,
    key: cards.length,
  });
  const [cardError, setCardError] = useState("");

  let onNavigate = (page) => {
    navigate(page);
  };

  const onChangeHandler = (cardPropertyToUpdate, event) => {
    const newCard = { ...card };

    newCard[cardPropertyToUpdate] = event.target.value;

    setCard(newCard);
  };

  // card.key = cards.length;
  // console.log(card.key);

  let handleAddCard = () => {
    if (card.vendor === "") {
      setCardError("You must choose a vendor.");
      return;
    }

    const onlyNumbers = new RegExp("^[0-9]+$");
    if (card.cardNumber.length !== 16 || !onlyNumbers.test(card.cardNumber)) {
      setCardError("Card number must be 16 digits.");
      return;
    }

    dispatch(addACard(card));

    onNavigate("/cards");
  };

  return (
    <>
      <div className="card">
        <Card card={card} />
      </div>
      {cardError && <p>{cardError}</p>}
      <div className="inputContainer">
        <label htmlFor="cardNumber">CARD NUMBER</label>
        <input
          type="text"
          id="cardNumber"
          onChange={(event) => onChangeHandler("cardNumber", event)}
          maxLength="16"
          value={card.cardNumber}
        />
        <label htmlFor="cardHolder">CARD HOLDER</label>
        <input type="text" id="cardHolder" value={userName} />

        <label htmlFor="valid">VALID THRU</label>
        <input
          type="text"
          id="valid"
          onChange={(event) => onChangeHandler("validThru", event)}
          maxLength={4}
          placeholder="MM/ÅÅ"
          value={card.validThru}
        />
        <label htmlFor="ccv">CCV</label>
        <input
          type="text"
          id="ccv"
          maxLength={3}
          onChange={(event) => onChangeHandler("ccv", event)}
        />
      </div>

      <select
        id="chooseVendor"
        onChange={(event) => onChangeHandler("vendor", event)}
        required="required"
        value={card.vendor}
      >
        <option value="">Choose Vendor</option>
        <option value="Visa">Visa</option>
        <option value="MasterCard">Master Card</option>
        <option value="Amex">American Express</option>
      </select>

      <button className="addCardBtn" onClick={() => handleAddCard()}>
        ADD CARD
      </button>
    </>
  );
};

export default AddCard;
