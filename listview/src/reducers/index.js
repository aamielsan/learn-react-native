import { combineReducers } from 'redux';

import LibraryReducer from './reducer_library';


const rootReducer = combineReducers({
  library: LibraryReducer
});


export default rootReducer;
