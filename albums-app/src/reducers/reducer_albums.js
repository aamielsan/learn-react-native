import * as c from '../constants';


const INIT_STATE = {
  albums: [],
  isFetching: false,
  isError: false,
  errorMsg: ""
}


export default function (state = INIT_STATE, action) {
  switch (action.type) {
    case c.GET_ALL_ALBUMS_FETCHING: {
      return {
        ...INIT_STATE,
        isFetching: true,
        albums: state.albums
      }
    }

    case c.GET_ALL_ALBUMS_DONE: {
      return {
        ...INIT_STATE,
        albums: action.payload
      }
    }

    case c.GET_ALL_ALBUMS_ERROR: {
      return {
        ...INIT_STATE,
        isError: true,
        errorMsg: action.payload
      }
    }

    default: {
      return state;
    }
  }
}
