import { SET_USER } from '../actions';

const setUser = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, state, { user: action.payload });

    default:
      return state;
  }
};

export default {
  setUser,
};
