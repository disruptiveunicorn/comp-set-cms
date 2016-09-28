import _ from 'lodash';
import { FETCH_PROJECTS, CREATE_PROJECT, DELETE_PROJECT} from '../actions/index';

const INITIAL_STATE = {};
export default function(state = INITIAL_STATE, action) {
  console.log('in the reducers ', action.payload);
  switch (action.type) {
    case FETCH_PROJECTS:
      const newPosts = _.map(action.payload, 'id');
      return {...state, ...newPosts};
    case CREATE_PROJECT:
      return { ...state, ...action.payload };
    case DELETE_PROJECT:
      return _.omit(state, action.payload);
  }
  return state;
}
