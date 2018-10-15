import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import {loadState, saveState} from './localStorage'


const persistedState = loadState();

const initialState = {};

const middleware = [thunk];

const store = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? createStore(
  rootReducer,
  persistedState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
) : createStore(
  rootReducer,
  persistedState,
  compose(
    applyMiddleware(...middleware)
  )
);

store.subscribe(() => {
  saveState(store.getState());
});


export default store;
