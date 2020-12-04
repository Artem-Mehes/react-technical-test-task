import {
	GET_EMPLOYEES_SUCCEEDED,
	GET_EMPLOYEES_FAILED,
	GET_EMPLOYEES_LOADING,
} from 'actions/types';
import axios from 'axios';
import alphabetSort from 'services/alphabetSort';

const API_URL =
	'https://yalantis-react-school-api.yalantis.com/api/task0/users';

const getEmployeesSucceeded = (employees) => {
	return {
		type: GET_EMPLOYEES_SUCCEEDED,
		employees,
	};
};

const getEmployeesLoading = () => {
	return {
		type: GET_EMPLOYEES_LOADING
	};
};

const getEmployeesFailed = (error) => {
	return {
        type: GET_EMPLOYEES_FAILED,
        error
	};
};

const getEmployees = () => async (dispatch) => {
    dispatch(getEmployeesLoading());

	try {
		const response = await axios.get(API_URL);

        const sortedEmployees = alphabetSort(response.data);
        
		dispatch(getEmployeesSucceeded(sortedEmployees));
	} catch (err) {
		dispatch(getEmployeesFailed(err.message));
	}
};

export default getEmployees;
