import { combineReducers } from 'redux';
import commentsReducer from './Comments/comments';

export default combineReducers({
	comments: commentsReducer
});
