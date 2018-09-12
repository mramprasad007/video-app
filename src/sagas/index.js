import { all, fork } from 'redux-saga/effects';

import watchGetMovieListSaga from './movie_list/getMovieList';

export default function* root() {
	yield all([fork(watchGetMovieListSaga)]);
}
