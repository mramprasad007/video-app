import {
	SET_MOVIE_CONTENT_LIST,
	SEARCH_MOVIE_CONTENT_LIST
} from '../constants';

const initialState = { pageName: '', pages: [], pageNo: 1, searchText: '' };

export default function movieListReducer(state = initialState, action) {
	switch (action.type) {
		case SET_MOVIE_CONTENT_LIST:
			return {
				...state,
				pageName: action.payload.movieContentList.page.title,
				pages: state.pages.concat(
					action.payload.movieContentList.page['content-items']
						.content
				),
				pageNo: state.pageNo + 1
			};
		case SEARCH_MOVIE_CONTENT_LIST:
			return {
				...state,
				searchText: action.payload.searchText
			};
		default:
			return state;
	}
}
