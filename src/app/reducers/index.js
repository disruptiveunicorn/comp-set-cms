import { combineReducers } from 'redux';
import FireBaseUserReducer from './firebase_user_reducer';
import ProjectsReducer from './projects_reducer';

const rootReducer = combineReducers({
    currentUser: FireBaseUserReducer,
    projects: ProjectsReducer
});

export default rootReducer;
