import { combineReducers } from "redux";
import TeamListReducer from "./components/TeamList/reducers"

const rootReducer = combineReducers({
    team: TeamListReducer,
  });
  
  export default rootReducer;