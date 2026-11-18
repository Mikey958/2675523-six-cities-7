import { createAction } from '@reduxjs/toolkit';
import { type Offer } from '../types/offer';

export const changeCity = createAction<string>('offers/changeCity');
export const loadOffers = createAction<Offer[]>('offers/loadOffers');
