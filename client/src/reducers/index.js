import { combineReducers } from 'redux';

import userReducer from './user';
import siteReducer from './site';

const reducers = combineReducers({
	userReducer,
	siteReducer,
});

export default reducers;
