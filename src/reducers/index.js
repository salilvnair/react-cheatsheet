import { combineReducers } from 'redux';

import commentsReducer from './comments.reducer';
import authReducer from './auth.reducer';

export default combineReducers({
    comments: commentsReducer,
    auth: authReducer
});