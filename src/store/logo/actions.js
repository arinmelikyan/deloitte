import axios from 'axios';
import { logo } from '../../api';

export const LOGO_SUCCESS = 'LOGO_SUCCESS';
export const LOGO_FAIL = 'LOGO_FAIL';

const fetchLogo = () => {  
    return async dispatch => {
      try {
        const data = await axios.get(logo);
        dispatch({ type: LOGO_SUCCESS, payload: data });
        return data;
      } catch (error) {
        dispatch({ type: LOGO_FAIL, error });
        return error;
      }
    }
}

export default fetchLogo;