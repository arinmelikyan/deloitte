import { LOGO_SUCCESS, LOGO_FAIL } from './actions';

const initialState = {
    logo: null,
}

const logoReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGO_SUCCESS:
            return {
                ...state,
                logo: action.payload.data
            }

        case LOGO_FAIL:
            return {
                ...state,
                error: action.error
            }
            
        default: 
            return state;   
    }
};

export default logoReducer;