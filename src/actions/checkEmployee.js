import { CHECK_EMPLOYEE } from 'actions/types';

const checkEmployee = (employee, month) => {
    return {
		type: CHECK_EMPLOYEE,
		payload: { employee, month },
	};
}

export default checkEmployee;