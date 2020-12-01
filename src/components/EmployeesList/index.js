import React from 'react';
import EmployeesItem from '../EmployeesItem';
import { useSelector } from 'react-redux';
import { StyledEmployeesList, EmployeesColumn, Letter } from './style';
import { formatMonth } from 'services/date';
import { v4 as uuidv4 } from 'uuid';

const EmployeesList = () => {
	const employees = useSelector(({ employees }) => employees);

	return (
		<StyledEmployeesList>
			{Object.keys(employees).map((letter) => {
				return (
					<EmployeesColumn key={uuidv4()}>
						<Letter>{letter}</Letter>
						<ul>
							{employees[letter].length > 0
								? employees[letter].map((employee) => {
										return (
											<EmployeesItem
												key={employee.id}
												employee={employee}
												month={formatMonth(
													employee.dob
												)}
											/>
										);
								  })
								: '-----'}
						</ul>
					</EmployeesColumn>
				);
			})}
		</StyledEmployeesList>
	);
};

export default EmployeesList;
