import { SET_EMPLOYEES } from 'constants/ActionTypes';

const setEmployees = (employees) => {
    return {
		type: SET_EMPLOYEES,
		employees,
	};
}

export default setEmployees;