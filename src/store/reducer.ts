import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadOffers } from './action';
import { type Offer } from '../types/offer';

export type State = {
  city: string;
  offers: Offer[];
};

export const initialState: State = {
  city: 'Paris',
  offers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export default reducer;
