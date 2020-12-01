import { Item } from './style';
import { formatDate } from 'services/date';
import { memo } from 'react';

const BirthdaysItem = ({ employee }) => {
	const { lastName, firstName, dob } = employee;

	return <Item>{`${lastName} ${firstName} - ${formatDate(dob)}`}</Item>;
};

export default memo(BirthdaysItem);
