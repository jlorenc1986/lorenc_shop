import { createStore } from 'redux';
import lorencShop from '../reducers';

const INIT_STATE = {
  user: {},
  cart: {},
  offers: [],
};
const store = createStore(
  lorencShop,
  window.__INITIAL_STATE__ || INIT_STATE, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
