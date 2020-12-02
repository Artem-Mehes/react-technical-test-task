import { combineReducers } from 'redux';
import setEmployeesReducer from './setEmployeesReducer';
import selectEmployeeReducer from './selectEmployeeReducer';

const rootReducer = combineReducers({
    employees: setEmployeesReducer,
    selected: selectEmployeeReducer
});

export default rootReducer;