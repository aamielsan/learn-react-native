import * as c from '../constants';


export function selectLibrary(id) {
  return { type: c.LIBRARY_SELECT_LIBRARY, payload: id };
}
