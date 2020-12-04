import { useEffect } from 'react';
import Employees from 'components/Employees';
import Birthdays from 'components/Birthdays';
import { useDispatch, useSelector } from 'react-redux';
import { Preloader, ErrHeading } from './style';
import getEmployees from 'actions/getEmployees';

function App() {
	const error = useSelector(({ employees }) => employees.error);
	const requestStatus = useSelector(({ employees }) => employees.status);
	const dispatch = useDispatch();

	useEffect(() => {
		if (requestStatus === 'idle') {
			dispatch(getEmployees());
		}
	}, [dispatch, requestStatus]);

	if (requestStatus === 'loading' || requestStatus === 'idle') {
		return <Preloader />;
	}

	if (requestStatus === 'failed') {
		return <ErrHeading>{error}</ErrHeading>;
	}

	return (
		<>
			<Employees />
			<Birthdays />
		</>
	);
}

export default App;
