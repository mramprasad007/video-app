import { SET_MOVIE_CONTENT_LIST } from '../constants';

const initialState = { pages: [] };

export default function movieListReducer(state = initialState, action) {
	switch (action.type) {
		case SET_MOVIE_CONTENT_LIST:
			return {
				...state,
				pages: action.payload.movieContentList.page
			};
		default:
			return state;
	}
}
