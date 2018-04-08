import { combineReducers } from 'redux';
import { user } from './user';
import { offers } from './offers';

const lorencShop = combineReducers({
  user,
  offers,
});

export default lorencShop;
