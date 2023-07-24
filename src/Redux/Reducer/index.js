import { combineReducers } from "redux";
import LoginRegisterField from "./LoginReducer";

const rootReducer = combineReducers({
  userData: LoginRegisterField,
});

export default rootReducer;
