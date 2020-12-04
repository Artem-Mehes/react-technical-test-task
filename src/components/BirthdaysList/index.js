import {
	Month,
	BirthdaysItems,
	StyledBirthdaysList,
	NoEmployees,
	ClearBtn,
} from './style';
import { useSelector, useDispatch } from 'react-redux';
import BirthdaysItem from '../BirthdaysItem';
import { v4 as uuidv4 } from 'uuid';
import {
	selectSelectedEmployees,
	removeAllEmployees,
} from 'slices/selectedEmployeesSlice';

const BirthdaysList = () => {
	const dispatch = useDispatch();
	const selectedEmployees = useSelector(selectSelectedEmployees);

	const birthdayMonths = Object.keys(selectedEmployees);

	if (birthdayMonths.length === 0) {
		return <NoEmployees>No selected employees</NoEmployees>;
	}

	return (
		<>
			<ClearBtn onClick={() => dispatch(removeAllEmployees())}>
				Clear All
			</ClearBtn>

			<StyledBirthdaysList>
				{birthdayMonths.map((month) => (
					<li key={uuidv4()}>
						<Month>{month}</Month>

						<BirthdaysItems>
							{selectedEmployees[month].map((employee) => (
								<BirthdaysItem
									key={employee.id}
									employee={employee}
								/>
							))}
						</BirthdaysItems>
					</li>
				))}
			</StyledBirthdaysList>
		</>
	);
};

export default BirthdaysList;
