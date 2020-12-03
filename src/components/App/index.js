import { useEffect, useState } from 'react';
import Employees from 'components/Employees';
import Birthdays from 'components/Birthdays';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import setEmployees from 'actions/setEmployees';
import alphabetSort from 'services/alphabetSort';
import { Preloader, ErrHeading } from './style';
import getEmployees from 'services/getEmployees';

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState('');
	const dispatch = useDispatch();

	useEffect(() => {
		const source = axios.CancelToken.source();

		getEmployees(source)
			.then(({ data }) => {
                const sortedEmployees = alphabetSort(data);
                
				dispatch(setEmployees(sortedEmployees));
				setIsLoading(false);
			})
			.catch((err) => {
				setError(err.message);
			});

		return () => source.cancel();
    }, [dispatch]);
    
    if (error.length > 0) {
        return <ErrHeading>{error}</ErrHeading>
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
