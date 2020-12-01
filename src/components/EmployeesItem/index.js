import React from 'react';
import { StyledEmployeesItem, Checkbox } from './style';
import { useDispatch } from 'react-redux';
import addEmployeeBirthday from 'actions/addEmployeeBirthday';
import deleteEmployeeBirthday from 'actions/deleteEmployeeBirthday';
import { useSelector } from 'react-redux';
import { memo } from 'react';

const EmployeesItem = ({ employee, month }) => {
	const dispatch = useDispatch();

	const isChecked = useSelector(({ selected }) => {
		const storeMonth = selected[month];

		return (
			(storeMonth && storeMonth.find(({ id }) => id === employee.id)) !==
			undefined
		);
	});

	const handleCheck = ({ target }) => {
		target.checked
			? dispatch(addEmployeeBirthday(employee, month))
			: dispatch(deleteEmployeeBirthday(employee, month));
	};

	const { lastName, firstName } = employee;

	return (
		<StyledEmployeesItem>
			{`${lastName} ${firstName}`}

			<Checkbox
				type="checkbox"
				onChange={handleCheck}
				checked={isChecked}
			/>
		</StyledEmployeesItem>
	);
};

export default memo(EmployeesItem);
