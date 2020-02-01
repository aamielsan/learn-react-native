import { createSelector } from 'reselect';


const getState = (state) => state.albums;


export const getAlbumState = createSelector(
  [
    getState
  ],
  (state) => state
);


export const getAlbums = createSelector(
  [
    getState
  ],
  (state) => state.albums || []
);
