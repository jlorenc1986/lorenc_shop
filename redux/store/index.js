import { createStore } from 'redux';
import lorencShop from '../reducers';

const store = createStore(
  lorencShop,
  window.__INITIAL_STATE__ || {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
