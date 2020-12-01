import { Month, BirthdaysItems, StyledBirthdaysList, NoEmployees } from './style';
import { useSelector } from 'react-redux';
import BirthdaysItem from '../BirthdaysItem';

const BirthdaysList = () => {
	const selectedEmployees = useSelector((state) => state.selected);

	const birthdayMonths = Object.keys(selectedEmployees);

	return (
		<StyledBirthdaysList>
			{birthdayMonths.length > 0 ? (
				<>
					{birthdayMonths.map((month) => (
						<li key={month}>
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
				</>
			) : (
				<NoEmployees>No selected employees</NoEmployees>
			)}
		</StyledBirthdaysList>
	);
};

export default BirthdaysList;
