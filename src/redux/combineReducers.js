import { combineReducers } from "redux";

import rotateReducer from "./rotate/reducer";

const combinedReducers = combineReducers({
    rotate: rotateReducer
});

export default combinedReducers;