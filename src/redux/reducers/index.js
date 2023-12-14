import { combineReducers } from "redux";

//Import All Reducers
import { watchReducer } from "./watch";

export default combineReducers({
    watch: watchReducer,
});
