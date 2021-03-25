import axios from 'axios';
import { categories } from '../../api';

export const CATEGORIES_SUCCESS = 'CATEGORIES_SUCCESS';
export const CATEGORIES_FAIL = 'CATEGORIES_FAIL';

const fetchCategories = () => {  
    return async dispatch => {
      try {
        const data = await axios.get(categories);
        dispatch({ type: CATEGORIES_SUCCESS, payload: data });
        return data;
      } catch (error) {
        dispatch({ type: CATEGORIES_FAIL, error });
        return error;
      }
    }
}

export default fetchCategories;