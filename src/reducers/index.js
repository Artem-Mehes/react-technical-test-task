import { combineReducers } from 'redux';
import setEmployeesReducer from './setEmployeesReducer';
import checkEmployeeReducer from './checkEmployeeReducer';

const rootReducer = combineReducers({
    employees: setEmployeesReducer,
    selected: checkEmployeeReducer
});

export default rootReducer;