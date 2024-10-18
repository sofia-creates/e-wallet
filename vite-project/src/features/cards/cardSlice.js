import { createSlice } from "@reduxjs/toolkit";
//import { createAsyncThunk } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: "cards",
    initialState: {
        cards: [
        //     {
        //     cardProvider: "VISA",
        //     cardHolderName: "Jane Doe",
        //     cardNumber: 1234,
        //     expirationDate: "12/25",
        //     ccv: 123,
        //     active: false
        // },
    ],
    },
    reducers: {
        addNewCard: (state, action) => {
            state.cards.push(action.payload);
            console.log("new card has been added, cards is now: " , [...state.cards])
        },
        toggleCardActive: (state, action) => {
            const card = state.cards.find((c) => c.cardNumber === action.payload);  // Find the card by some unique property
            if (card) {
                card.active = !card.active; // Toggle the 'active' property
            }
        },
        deleteCard: (state,action) => {
            const cardIndex = state.cards.findIndex((c) => c.cardNumber === action.payload);
            if (cardIndex) {
                state.cards.splice(cardIndex, 1); 
            }
        }
    },
});


export const {toggleCardActive, deleteCard} = cardSlice.actions;
export const addNewCard = cardSlice.actions.addNewCard;

export default cardSlice.reducer;