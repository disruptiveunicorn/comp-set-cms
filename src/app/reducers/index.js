import { combineReducers } from 'redux';
import FireBaseUserReducer from './firebase_user_reducer';
import ProjectsReducer from './projects_reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    currentUser: FireBaseUserReducer,
    projects: ProjectsReducer,
    form: formReducer
});

export default rootReducer;
