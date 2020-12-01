import React from 'react';
import EmployeesItem from '../EmployeesItem';
import { useSelector } from 'react-redux';
import { StyledEmployeesList, EmployeesColumn, Letter } from './style';
import { formatMonth } from 'services/date';

const EmployeesList = () => {
	const employees = useSelector(({ employees }) => employees);

	return (
		<StyledEmployeesList>
			{Object.keys(employees)
				.sort()
				.map((letter) => {
					return (
						<EmployeesColumn key={letter}>
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
