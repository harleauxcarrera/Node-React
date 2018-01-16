import axios from 'axios';
import {FETCH_USER} from './types';

//action creator
export const fetchUser = () => async dispatch =>{
  const res = await axios.get('/api/current_user');
  //payload returns the response of the request from the back End
  ///and we only care about the data prop so pass res.data as payload
     dispatch({type: FETCH_USER, payload: res.data});
};
