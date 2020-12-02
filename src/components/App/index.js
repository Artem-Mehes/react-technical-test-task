import { useEffect, useState } from 'react';
import Employees from 'components/Employees';
import Birthdays from 'components/Birthdays';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import setEmployees from 'actions/setEmployees';
import sortByFirstLetter from 'services/sortByFirstLetter';
import { Preloader, ErrHeading } from './style';
import getEmployees from 'services/getEmployees';

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState({ message: '', isErrorCatched: false });
	const dispatch = useDispatch();

	useEffect(() => {
		const source = axios.CancelToken.source();

		getEmployees(source)
			.then(({ data }) => {
				const sortedEmployees = sortByFirstLetter(data);

				dispatch(setEmployees(sortedEmployees));
				setIsLoading(false);
			})
			.catch((err) => {
				setError({
					message: err.message,
					isErrorCatched: true,
				});
			});

		return () => source.cancel();
    }, [dispatch]);
    
    if (error.isErrorCatched) {
        return <ErrHeading>{error.message}</ErrHeading>
    }

    if (isLoading) {
        return <Preloader />
    }

	return (
        <>
            <Employees />
            <Birthdays />
        </>
	);
}

export default App;
