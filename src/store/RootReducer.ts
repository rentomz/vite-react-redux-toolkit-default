import { combineReducers } from "redux";
import testReducer from "./features/TestSlice";
import iceReducer from "./features/IceSlice";
import cakeReducer from "./features/CakeSlice";


const RootReducer = combineReducers({
  test: testReducer.reducer,
  ice: iceReducer.reducer,
  cake: cakeReducer.reducer
});

export default RootReducer;
