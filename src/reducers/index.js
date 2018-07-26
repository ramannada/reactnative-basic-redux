import {combineReducers} from 'redux';
import Library from './Library';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
    libraries: Library,
    selectedLibraryId: SelectionReducer
});