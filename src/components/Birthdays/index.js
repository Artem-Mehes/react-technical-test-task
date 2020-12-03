import { BirthdaysAside, Heading, BirthdaysInner, Header } from './style';
import BirthdaysList from '../BirthdaysList';

const Birthdays = () => {
	return (
		<BirthdaysAside>
			<BirthdaysInner>
				<Header>
					<Heading>Employees Birthday</Heading>
				</Header>

				<BirthdaysList />
			</BirthdaysInner>
		</BirthdaysAside>
	);
};

export default Birthdays;
