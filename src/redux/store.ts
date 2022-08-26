import { applyMiddleware, combineReducers, createStore } from "redux";

import thunk from "redux-thunk";
import { chartReducer } from "./cart/reducers/chart";
import { categoryReducer } from "./categories/reduser/categories";


const reducers = combineReducers({
  chart: chartReducer,
  category: categoryReducer
});

type rootReducerType = typeof reducers;
export type RootStateType = ReturnType<rootReducerType>;

// @ts-ignore
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, applyMiddleware(thunk));
export default store;