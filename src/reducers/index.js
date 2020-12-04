import { combineReducers } from 'redux';
import getEmployeesReducer from './getEmployeesReducer';
import selectEmployeeReducer from './selectEmployeeReducer';

const rootReducer = combineReducers({
	employees: getEmployeesReducer,
	selected: selectEmployeeReducer,
});

export default rootReducer;