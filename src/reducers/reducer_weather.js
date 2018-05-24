import { FETCH_WEATHER } from '../actions/index';

export default (state = [], action) => {
    console.log(action.payload);
  switch (action.type) {
  case FETCH_WEATHER:
    return [ action.payload.data, ...state ]; 
  }
  return state;
}