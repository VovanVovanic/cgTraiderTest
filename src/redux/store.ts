import { applyMiddleware, combineReducers, createStore } from "redux";

import thunk from "redux-thunk";
import { chartReducer} from './reducers/chart';

const reducers = combineReducers({
chart: chartReducer
});

type rootReducerType = typeof reducers;
export type RootStateType = ReturnType<rootReducerType>;

// @ts-ignore
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, applyMiddleware(thunk));
export default store;