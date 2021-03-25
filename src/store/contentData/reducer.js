import { CONTENT_DATA_SUCCESS, CONTENT_DATA_FAIL } from './actions';

const initialState = {
    contentData: [], 
}

const contentDataReducer = (state = initialState, action) => {
    switch(action.type) {
        case CONTENT_DATA_SUCCESS:
            return {
                ...state,
                contentData: action.payload.data
            }

        case CONTENT_DATA_FAIL:
            return {
                ...state,
                error: action.error
            }
            
        default: 
            return state;   
    }
};

export default contentDataReducer;