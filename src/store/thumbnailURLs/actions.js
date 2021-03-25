import axios from 'axios';
import { thumbnailURLs } from '../../api';

export const THUMBNAIL_URLS_SUCCESS = 'THUMBNAIL_URLS_SUCCESS';
export const THUMBNAIL_URLS_FAIL = 'THUMBNAIL_URLS_FAIL';

const fetchThumbnailURLs = () => {  
    return async dispatch => {
      try {
        const data = await axios.get(thumbnailURLs);
        dispatch({ type: THUMBNAIL_URLS_SUCCESS, payload: data });
        return data;
      } catch (error) {
        dispatch({ type: THUMBNAIL_URLS_FAIL, error });
        return error;
      }
    }
}

export default fetchThumbnailURLs;