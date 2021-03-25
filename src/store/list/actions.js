import axios from 'axios';
import { list } from '../../api';

export const LIST_SUCCESS = 'LIST_SUCCESS';
export const LIST_FAIL = 'LIST_FAIL';

const fetchList = () => {  
    return async dispatch => {
      try {
        const data = await axios.get(list);
        dispatch({ type: LIST_SUCCESS, payload: data });
        return data;
      } catch (error) {
        dispatch({ type: LIST_FAIL, error });
        return error;
      }
    }
}

export default fetchList;