import firebase from 'firebase';
import { FETCH_PROJECTS } from './types';

const projects = firebaseDb.ref('projects');

export function fetchProjects() {
  return dispatch => {
    projects.on('value', snapshot => {
      dispatch({
        type: FETCH_PROJECTS,
        payload: snapshot.val()
      })
    })
  }
}
