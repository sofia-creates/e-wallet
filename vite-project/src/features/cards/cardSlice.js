import { createSlice } from "@reduxjs/toolkit";
//import { createAsyncThunk } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: "cards",
    initialState: {
        cards: [{
            cardProvider: "VISA",
            cardHolderName: "Jane Doe",
            cardNumber: 1234,
            expirationDate: "12/25",
            ccv: 123,

        },],
    },
    reducers: {
        addNewCard: (state, action) => {
            state.cards.push(action.payload);
            console.log("new card has been added, cards is now: " , [...state.cards])
        },
    },
})

export default cardSlice.reducer;

export const addNewCard = cardSlice.actions.addNewCard;