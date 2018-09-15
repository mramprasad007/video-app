import {
	GET_MOVIE_LIST,
	SET_MOVIE_CONTENT_LIST,
	SEARCH_MOVIE_CONTENT_LIST
} from '../constants';

export function getMovieList(pageNo) {
	return {
		type: GET_MOVIE_LIST,
		payload: {
			pageNo: pageNo
		}
	};
}
export function setMovieContentList(movieContentList) {
	return {
		type: SET_MOVIE_CONTENT_LIST,
		payload: {
			movieContentList: movieContentList
		}
	};
}
export function searchMovieList(searchText) {
	return {
		type: SEARCH_MOVIE_CONTENT_LIST,
		payload: {
			searchText: searchText
		}
	};
}
