import { call, all, fork, put, takeEvery } from 'redux-saga/effects';

import * as c from '../constants';
import * as api from '../api';
import * as actions from '../actions';




export default function* () {
  yield all([
    fork(getAllAlbumsSaga),
  ]);
}




function* getAllAlbumsSaga() {
  yield takeEvery(c.GET_ALL_ALBUMS, callGetAllAlbums);
}
function* callGetAllAlbums() {
  try {
    yield put(actions.getAllAlbumsFetching());
    const result = yield call(api.getAllAlbums);
    yield put(actions.getAllAlbumsDone(result));
  } catch (err) {
    console.error('@callGetAllAlbums: ', err.message || err);
    yield put(actions.getAllAlbumsError(err.message || err));
  }
}
