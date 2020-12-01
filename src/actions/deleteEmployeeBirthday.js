const deleteEmployeeBirthday = (employee, month) => {
	return {
		type: 'DELETE_EMPLOYEE',
		payload: { employee, month },
	};
};

export default deleteEmployeeBirthday;
