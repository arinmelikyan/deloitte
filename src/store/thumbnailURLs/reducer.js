import { THUMBNAIL_URLS_SUCCESS, THUMBNAIL_URLS_FAIL } from './actions';

const initialState = {
    thumbnailURLs: [],
    error: null,
}

const thumbnailURLsReducer = (state = initialState, action) => {
    switch(action.type) {
        case THUMBNAIL_URLS_SUCCESS:
            return {
                ...state,
                thumbnailURLs: action.payload.data
            }

        case THUMBNAIL_URLS_FAIL:
            return {
                ...state,
                error: action.error
            }
            
        default: 
            return state;   
    }
};

export default thumbnailURLsReducer;