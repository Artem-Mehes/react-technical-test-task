import { useEffect } from 'react';
import 'normalize.css';
import GlobalStyle from 'styles/globalStyle';
import Employees from 'components/Employees';
import Birthdays from 'components/Birthdays';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import setEmployees from 'actions/setEmployees';
import { employeesUrl } from './constants';
import sortEmployees from 'services/sortEmployees';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		const getEmployees = async () => {
            const { data } = await axios.get(employeesUrl);

            const sortedEmployees = sortEmployees(data);

			dispatch(setEmployees(sortedEmployees));
        };

		getEmployees();
	}, [dispatch]);

	return (
		<>
            <GlobalStyle />
			<Employees />
            <Birthdays />
		</>
	);
}

export default App;
