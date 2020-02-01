import * as c from '../constants';


export function getAllAlbums() {
  return { type: c.GET_ALL_ALBUMS };
}


export function getAllAlbumsFetching() {
  return { type: c.GET_ALL_ALBUMS_FETCHING };
}


export function getAllAlbumsError(message) {
  return { type: c.GET_ALL_ALBUMS_ERROR, payload: message };
}


export function getAllAlbumsDone(albums) {
  return { type: c.GET_ALL_ALBUMS_DONE, payload: albums };
}
