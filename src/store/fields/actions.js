import axios from 'axios';
import { fields } from '../../api';

export const FIELDS_SUCCESS = 'FIELDS_SUCCESS';
export const FIELDS_FAIL = 'FIELDS_FAIL';

const fetchFields = () => {  
    return async dispatch => {
      try {
        const data = await axios.get(fields);
        dispatch({ type: FIELDS_SUCCESS, payload: data });
        return data;
      } catch (error) {
        dispatch({ type: FIELDS_FAIL, error });
        return error;
      }
    }
}

export default fetchFields;