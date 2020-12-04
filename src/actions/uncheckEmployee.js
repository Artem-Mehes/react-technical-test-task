import { UNCHECK_EMPLOYEE } from 'actions/types';

const uncheckEmployee = (employee, month) => {
	return {
		type: UNCHECK_EMPLOYEE,
		payload: { employee, month },
	};
};

export default uncheckEmployee;
