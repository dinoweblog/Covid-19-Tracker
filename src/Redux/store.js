import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { loginReducer } from "./Login/reducer";

import {  searchReducer } from "./Search/reducer";
import { searchProductsReducer } from "./Search/reducer";

export const rootReducer = combineReducers({
  products: productsReducer,
  login: loginReducer,
  search: searchReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
