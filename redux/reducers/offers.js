import { SET_OFFERS } from '../actions';

const setOffers = (state, action) => {
  switch (action.type) {
    case SET_OFFERS:
      return Object.assign({}, state, { offers: action.payload });

    default:
      return state;
  }
};

export default {
  setOffers,
};
