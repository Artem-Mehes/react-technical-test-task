const sortByFirstLetter = (employees) => {
	const alphabetObject = [...Array(26)].reduce(
		(obj, _, i) => ({ ...obj, [String.fromCharCode(i + 65)]: [] }),
		{}
	);

	employees.forEach((employee) =>
		alphabetObject[employee.lastName[0]].push(employee)
	);

	return alphabetObject;
};

export default sortByFirstLetter;
