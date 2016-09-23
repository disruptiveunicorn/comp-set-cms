import { FETCH_PROJECTS } from '../actions/types';
import { CREATE_PROJECT } from '../actions/types';

const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_PROJECTS:
      return { ...state, all: action.payload };
    case CREATE_PROJECT:
      return { ...state, all: action.payload };
    default:
      return state;
  }
}
