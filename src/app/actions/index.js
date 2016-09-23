import firebase from 'firebase';
import { FETCH_PROJECTS } from './types';
import { CREATE_PROJECT } from './types';
import { firebaseDb } from '../utils/firebase'

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

export function createProject() {
  return dispatch => {
    projects.on('value', snapshot => {
      dispatch({
        type: CREATE_PROJECT,
        payload: snapshot.val()
      })
    })
  }
}
