import { combineReducers } from "redux";
import todoReducers from "./todoreducers";

const rootReducer=combineReducers({
     todoReducers,
})

export default rootReducer;