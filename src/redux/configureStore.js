import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../components/users/userSlice";

 import cardListSlice from "../components/cards/cardListSlice";


const store = configureStore({
  reducer: {
    user: userSlice,
    cardList: cardListSlice,
  }
})

export default store;