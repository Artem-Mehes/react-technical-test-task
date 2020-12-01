import React from 'react';
import { Heading, Main } from './style';
import EmployeesList from '../EmployeesList';

const Employees = () => {
	return (
		<Main>
			<Heading>Employees</Heading>

            <EmployeesList />
		</Main>
	);
};

export default Employees;
