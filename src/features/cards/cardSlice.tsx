// cardSlice.js
import { createSlice } from "@reduxjs/toolkit";
const cardSlice = createSlice({
  name: "cards",
  initialState: {
    cards: {}
  },
  reducers: {
    addCard: (state, action) => {
      const { id, front, back } = action.payload;
      state.cards[id] = {
        id,
        front,
        back
      };
    }
  }
});

export const { addCard } = cardSlice.actions;
export const selectCard = (state) => state.cards.cards;
export default cardSlice.reducer;
