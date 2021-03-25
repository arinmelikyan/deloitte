import { CATEGORIES_SUCCESS, CATEGORIES_FAIL } from './actions';

const initialState = {
    categories: [],
    headerLogo: null,
    title: null,
    error: null,
}

const categoriesReducer = (state = initialState, action) => {
    switch(action.type) {
        case CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.payload.data.cats,
                headerLogo: action.payload.data.header_logo,
                title: action.payload.data.title
            }

        case CATEGORIES_FAIL:
            return {
                ...state,
                error: action.error
            }
            
        default: 
            return state;   
    }
};

export default categoriesReducer;