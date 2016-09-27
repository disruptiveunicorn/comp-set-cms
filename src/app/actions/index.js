import firebase from 'firebase';
import { FETCH_PROJECTS } from './types';
import { CREATE_PROJECT } from './types';
import { ADD_USER_TO_DATABASE } from './types';
import { firebaseDb } from '../utils/firebase'

const users = firebaseDb.ref('users');

export function fetchProjects(userUID) {
  let projects = firebaseDb.ref('users/' + userUID + '/projects')
  return dispatch => {
    projects.on('value', snapshot => {
      dispatch({
        type: FETCH_PROJECTS,
        payload: snapshot.val()
      })
    })
  }
}

export function createProject(userUID, title, location) {
  let projects = firebaseDb.ref('users/' + userUID + '/projects/')
  return dispatch => projects.push( {"title": title, "location": location} );
}

export function addUserToDatabase(userUID, email) {
  return dispatch => firebaseDb.ref('users/' + userUID).set( {"email": email} );
}
