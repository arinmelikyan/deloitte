import { LIST_SUCCESS, LIST_FAIL } from './actions';

const initialState = {
    list: [],
    error: null
}

const listReducer = (state = initialState, action) => {
    switch(action.type) {
        case LIST_SUCCESS:
            return {
                ...state,
                list: action.payload.data.contents
            }

        case LIST_FAIL:
            return {
                ...state,
                error: action.error
            }
            
        default: 
            return state;   
    }
};

export default listReducer;