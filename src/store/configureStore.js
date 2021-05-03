import {createStore, combineReducers} from 'redux';
import gameInfoReducer from './reducers/gameInfo';

const rootReducer = combineReducers({
  gameInfo: gameInfoReducer,
});

export default function configureStore() {
  return createStore(rootReducer);
}
