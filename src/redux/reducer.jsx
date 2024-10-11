// reducers.js
import { FETCH_VIDEOS_SUCCESS, FETCH_VIDEOS_FAILURE } from './actions';

const initialState = {
  videos: [],
  error: null,
};

const videoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VIDEOS_SUCCESS:
      return {
        ...state,
        videos: action.payload,
      };
    case FETCH_VIDEOS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default videoReducer;
