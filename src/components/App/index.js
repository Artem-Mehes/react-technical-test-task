import { useEffect } from 'react';
import Employees from 'components/Employees';
import Birthdays from 'components/Birthdays';
import { useDispatch, useSelector } from 'react-redux';
import { Preloader, ErrHeading } from './style';
import { getEmployees, selectStatus, selectError } from 'slices/employeesSlice';

function App() {
	const requestStatus = useSelector(selectStatus);
	const error = useSelector(selectError);
	const dispatch = useDispatch();

	useEffect(() => {
		if (requestStatus === 'idle') {
			dispatch(getEmployees());
		}
	}, [dispatch, requestStatus]);

	if (requestStatus === 'pending' || requestStatus === 'idle') {
		return <Preloader />;
	}

	if (requestStatus === 'error') {
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
