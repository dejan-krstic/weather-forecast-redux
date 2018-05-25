import { FETCH_WEATHER } from '../actions/index';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      if (action.payload && 199 < action.payload.data.cod < 400) {
        return [action.payload.data, ...state];
      }
  }
  return state;
}