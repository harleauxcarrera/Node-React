//impprt the fetch user action
import {FETCH_USER} from '../actions/types';
//returning null returns the default state (null) right when app boots up
//waits to fetch user data if loggedin
export default function(state = null, action){

  switch(action.type){
    //different action types go here
    case FETCH_USER:
      //This payload will either return the object of the usermodel or an empty string(user !loggedin)
      //add js markup to explicitly return false when there is no one logged in (instead of empty string
      return action.payload || false;
    default:
      return state;
  }
}
