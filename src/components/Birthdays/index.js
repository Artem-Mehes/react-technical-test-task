import {
	BirthdaysAside,
    Heading,
    BirthdaysInner
} from './style';
import BirthdaysList from '../BirthdaysList';

const Birthdays = () => {
	return (
		<BirthdaysAside>
            <BirthdaysInner>
                <Heading>Employees Birthday</Heading>

                <BirthdaysList />
            </BirthdaysInner>
		</BirthdaysAside>
	);
};

export default Birthdays;
