import data from './data/libraries.json';
import * as c from '../constants';

const INIT_STATE = {
  list: data,
  selected: null
};

export default function LibraryReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case c.LIBRARY_SELECT_LIBRARY: {
      return {
        ...state,
        selected: action.payload
      }
    }

    default: {
      return state;
    }
  }
}
