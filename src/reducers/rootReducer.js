import { combineReducers } from 'redux';

import { photosReducer } from './photosReducer';
import { uiReducer } from './uiReducer';

export const rootReducer = combineReducers({
	ui: uiReducer,
	photos: photosReducer,
});
