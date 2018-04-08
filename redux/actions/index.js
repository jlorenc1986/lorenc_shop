export const SET_USER = 'LORENC_SHOP/USER/SET_USER';
export const SET_OFFERS = 'LORENC_SHOP/OFFERS/SET_OFFERS';
export const LOAD_OFFERS = 'LORENC_SHOP/API/LOAD_OFFERS';
export const setUser = user => ({ type: SET_USER, user });
export const setOffers = offers => ({ type: SET_OFFERS, offers });
