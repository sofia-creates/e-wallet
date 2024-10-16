import { configureStore } from "@reduxjs/toolkit";
//import employeeSlice from "../features/employees/employeeSlice";
import cardReducer from "../features/cards/cardSlice"; //importing and renaming the default export from the slice - which is the reducer of the cardslice


const store = configureStore({
  reducer: {
    cards: cardReducer,
  },
});

export default store;