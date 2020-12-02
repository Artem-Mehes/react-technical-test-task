const uncheckEmployee = (employee, month) => {
	return {
		type: 'UNCHECK_EMPLOYEE',
		payload: { employee, month },
	};
};

export default uncheckEmployee;
