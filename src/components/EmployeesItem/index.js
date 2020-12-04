import React from 'react';
import { StyledEmployeesItem, Checkbox } from './style';
import { useDispatch } from 'react-redux';
import {
	checkEmployee,
	uncheckEmployee,
	selectSelectedEmployees,
} from 'slices/selectedEmployeesSlice';
import { useSelector } from 'react-redux';
import { memo } from 'react';
import { shape, string } from 'prop-types';

const EmployeesItem = ({ employee, month }) => {
	const dispatch = useDispatch();
	const selected = useSelector(selectSelectedEmployees);

	const isChecked =
		(selected[month] &&
			selected[month].find(({ id }) => employee.id === id)) !== undefined;

	const handleCheck = ({ target }) => {
		dispatch(
			target.checked
				? checkEmployee({ employee, month })
				: uncheckEmployee({ employee, month })
		);
	};

	return (
		<StyledEmployeesItem>
			{`${employee.lastName} ${employee.firstName}`}

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
