import React from 'react';
import { StyledEmployeesItem, Checkbox } from './style';
import { useDispatch } from 'react-redux';
import checkEmployee from 'actions/checkEmployee';
import uncheckEmployee from 'actions/uncheckEmployee';
import { useSelector } from 'react-redux';
import { memo } from 'react';
import { shape, string } from 'prop-types';

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
			? dispatch(checkEmployee(employee, month))
			: dispatch(uncheckEmployee(employee, month));
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

EmployeesItem.propTypes = {
	employee: shape({
		id: string.isRequired,
		lastName: string.isRequired,
		firstName: string.isRequired,
		dob: string,
	}),
	month: string,
};

export default memo(EmployeesItem);
