//we will run all our reducer here if we have multiple reducers 

import { combineReducers } from "redux";
import { cartreducer } from "./reducer";

const rootred = combineReducers({
    cartreducer
});

export default rootred;