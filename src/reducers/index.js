import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import movieListReducer from './movie_list';

export default combineReducers({
	routing: routerReducer,
	movieListReducer
});
