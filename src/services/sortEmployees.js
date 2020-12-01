const sortEmployees = (employees) => {
	const alphabetObject = [...Array(26)]
		.map((_, i) => String.fromCharCode(i + 65))
		.reduce((obj, letter) => ({ [letter]: [], ...obj }), {});

	employees.forEach((employee) =>
		alphabetObject[employee.lastName[0]].push(employee)
	);

	return alphabetObject;
};

export default sortEmployees;
