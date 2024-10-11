// actions.js
import axios from 'axios';

export const FETCH_VIDEOS_SUCCESS = 'FETCH_VIDEOS_SUCCESS';
export const FETCH_VIDEOS_FAILURE = 'FETCH_VIDEOS_FAILURE';

export const fetchVideos = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('YOUR_API_ENDPOINT_HERE'); // Replace with your API URL
      dispatch({ type: FETCH_VIDEOS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_VIDEOS_FAILURE, payload: error.message });
    }
  };
};
