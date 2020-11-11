import { combineReducers } from "redux";

import modalReducer from "./modal";

const allReducers = combineReducers({
    modal: modalReducer
});

export default allReducers;
