import { createSlice } from '@reduxjs/toolkit';

const options = {
    name: 'cards',
    initialState: {
        cards: {}
    },
    reducers: {
        addCard: (state, action) => {
            const { cardId, front, back} = action.payload;
            state.cards[cardId] =  {
                id: cardId,
                front: front,
                back: back
            };
        },
    },
    //extra reducers here
}

export const cardSlice = createSlice(options);
//selector
export const selectCards = state => state.cards.cards;
// actions + reducer
export const { addCard } = cardSlice.actions;
export default cardSlice.reducer;