import { Item } from './style';
import { formatDate } from 'services/date';
import { memo } from 'react';
import { shape, string } from 'prop-types';

const BirthdaysItem = ({ employee }) => {
	const { lastName, firstName, dob } = employee;

	return <Item>{`${lastName} ${firstName} - ${formatDate(dob)}`}</Item>;
};

BirthdaysItem.propTypes = {
	employee: shape({
		id: string,
		lastName: string,
		firstName: string,
		dob: string,
	}),
};

export default memo(BirthdaysItem);
