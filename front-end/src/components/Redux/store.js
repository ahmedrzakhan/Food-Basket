import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import productReducer from "./product/reducer";
import authReducer from "./auth/reducer";
import cartReducer from "./cart/reducer"

const rootReducer = combineReducers({
  product: productReducer,
  auth: authReducer,
  cart: cartReducer
});

const composeEnhancers =
  (typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancer);
