import { combineReducers } from 'redux';
import categories from './categories/reducer';
import list from './list/reducer';
import fields from './fields/reducer';
import contentData from './contentData/reducer';
import logo from './logo/reducer';
import thumbnailURLs from './thumbnailURLs/reducer';

export default combineReducers({
    categories,
    list,
    contentData,
    fields,
    logo,
    thumbnailURLs,
});