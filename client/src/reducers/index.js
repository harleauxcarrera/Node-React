import {combineReducers} from 'redux';
import authReducer from "./authReducer";

export default combineReducers({
  //auth peice of state is being managed by authRedcer
  auth: authReducer
});
