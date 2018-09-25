import { createStore, combineReducers, compose } from 'redux';

import placesReducer from './reducers/places';

const rootReducer = combineReducers({
  places: placesReducer,
});

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = windws.
}

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
