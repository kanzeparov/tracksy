import { combineReducers } from 'redux';
import user from './user';
import auth from './auth';
import services from './services';

export default combineReducers({ user, auth, services });
