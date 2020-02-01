import { createSelector } from 'reselect';


export const getLibraryState = createSelector(
  [
    (state) => state.library
  ],
  (state) => state
);


export const getLibraryList = createSelector(
  [
    getLibraryState
  ],
  (state) => state.list
);


export const getSelectedLibrary = createSelector(
  [
    getLibraryState
  ],
  (state) => state.selected
);
