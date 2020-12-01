import { useEffect, useState } from 'react';
import 'normalize.css';
import GlobalStyle from 'styles/globalStyle';
import Employees from 'components/Employees';
import Birthdays from 'components/Birthdays';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import setEmployees from 'actions/setEmployees';
import sortByFirstLetter from 'services/sortByFirstLetter';
import { Preloader } from './style';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import { employeesUrl } from '../../constants';

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const dispatch = useDispatch();

	useEffect(() => {
		const source = axios.CancelToken.source();

		const getEmployees = async () => {
			try {
				const response = await axios.get(employeesUrl, {
					cancelToken: source.token,
				});

				const sortedEmployees = sortByFirstLetter(response.data);

				dispatch(setEmployees(sortedEmployees));
				setIsLoading(false);
			} catch (err) {
				console.log(err);
			}
		};

		getEmployees();

		return () => source.cancel();
	}, [dispatch]);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />

			{isLoading ? (
				<Preloader />
			) : (
				<>
					<Employees />
					<Birthdays />
				</>
			)}
		</ThemeProvider>
	);
}

export default App;
