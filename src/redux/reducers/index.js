import { combineReducers } from "redux";

import  SearchReducer from './search.reducer';

const rootReducer = combineReducers({
    search: SearchReducer,
});

export default rootReducer;