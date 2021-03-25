import axios from 'axios';
import { contentData } from '../../api';

export const CONTENT_DATA_SUCCESS = 'CONTENT_DATA_SUCCESS';
export const CONTENT_DATA_FAIL = 'CONTENT_DATA_FAIL';

const fetchContentData = (contentId) => {  
    return async dispatch => {
      try {
        const data = await axios.get(contentData(contentId));
        dispatch({ type: CONTENT_DATA_SUCCESS, payload: data });
        return data;
      } catch (error) {
        dispatch({ type: CONTENT_DATA_FAIL, error });
        return error;
      }
    }
}

export default fetchContentData;