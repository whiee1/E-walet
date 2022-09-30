import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { addCards } from "../users/userSlice";

//FUNKAR

const cardListSlice = createSlice({
  name: "cardList",
  initialState: {
    cards: [
      {
        cardHolder: "John Doe",
        cardNumber: "111122223333444",
        validThru: "11/11",
        ccv: "111",
        vendor: "Visa",
        active: true,
        key: 0,
      },
    ],
  },
  reducers: {
    addACard: (state, action) => {
      if (state.cards.length < 4) {
        state.cards = [...state.cards, action.payload];
      } else {
        alert("To many cards");
      }
    },

    deleteCard: (state, action) => {
      state.cards = state.cards.filter((card) => card.key !== action.payload);
    },

    changeActiveCard: (state, action) => {
      const newCardsArray = state.cards.map((card) => {
        card.key === action.payload
          ? (card.active = true)
          : (card.active = false);

        return card;
      });
      state.cards = newCardsArray;
    },
  },
});
export const { addACard, changeActiveCard, cardClick, deleteCard } =
  cardListSlice.actions;
export default cardListSlice.reducer;
