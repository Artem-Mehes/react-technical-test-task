import { SET_EMPLOYEES } from 'constants/ActionTypes';

const setEmployeesReducer = (state = [], { type, employees }) => {
    switch (type) {
		case SET_EMPLOYEES:
			return employees;
		default:
			return state;
	}
}

export default setEmployeesReducer;