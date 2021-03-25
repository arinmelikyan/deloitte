import { FIELDS_SUCCESS, FIELDS_FAIL } from './actions';

const initialState = {
    fields: [],
    error: null
}

const fieldsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FIELDS_SUCCESS:
            const { appFields } = action.payload.data;
            const fields = appFields.slice(0, 5).map(field => {
                return {
                    name: field.name,
                    title: field.title,
                    type: field.type,
                    required: field.required,
                    options: field.options,

                }
            });
            return {
                ...state,
                fields,
            }

        case FIELDS_FAIL:
            return {
                ...state,
                error: action.error
            }
            
        default: 
            return state;   
    }
};

export default fieldsReducer;