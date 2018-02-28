import axios from 'axios';
import {FETCH_USER} from './types';

//action creator
export const fetchUser = () => async dispatch =>{
  const res = await axios.get('/api/current_user');
  //payload returns the response of the request from the back End
  ///and we only care about the data prop so pass res.data as payload
     dispatch({type: FETCH_USER, payload: res.data});
};


//export the token action creater created from submitting the Stripe FORM
// is an aysn action so has the same structure as fetchUser above.
export const handleToken = (token) => async dispatch => {
  //make a post request with the data from the form to the backend server
  const res = await axios.post('/api/stripe', token);

  //what kind of action are we going to dispatch?
  // since the backend server sends back the current user model with
  //updated amount of credits, just use FETCH_USER to update the Credits compnonet
  //make sure the header credits component looks at the user model to display correct numbers
  // of credits
  dispatch({type: FETCH_USER, payload: res.data});
};
