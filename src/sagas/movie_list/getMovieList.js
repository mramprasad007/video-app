import { put, takeLatest, call } from 'redux-saga/effects';

import { GET_MOVIE_LIST } from '../../constants';
import { setMovieContentList } from '../../actions';
import { getMovieList } from '../../lib/api';

function* workerGetMovieListSaga(action) {
	const contentList = yield call(getMovieList, action.payload.pageNo);
	yield put(setMovieContentList(contentList));
}

export default function* watchGetMovieListSaga() {
	yield takeLatest(GET_MOVIE_LIST, workerGetMovieListSaga);
}
