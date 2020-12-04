import {
	GET_EMPLOYEES_FAILED,
	GET_EMPLOYEES_LOADING,
	GET_EMPLOYEES_SUCCEEDED,
} from 'actions/types';

const initialState = {
	status: 'idle',
	error: null,
	data: {},
};

const getEmployeesReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_EMPLOYEES_LOADING:
			return {
				...state,
				status: 'loading',
			};
		case GET_EMPLOYEES_SUCCEEDED:
			return {
				...state,
				status: 'succeeded',
				data: action.employees,
			};
		case GET_EMPLOYEES_FAILED:
			return {
				...state,
				status: 'failed',
				error: action.error
			};
		default:
			return state;
	}
};

export default getEmployeesReducer;
