import { combineReducers } from 'redux';
import AppointmentReducer from './appointment-reducer';
import SessionReducer from './session-reducer';

const reducers = {
	sessionStore: SessionReducer,
	  appointmentStore: AppointmentReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;