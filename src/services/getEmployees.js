import axios from 'axios';

const API_URL =
	'https://yalantis-react-school-api.yalantis.com/api/task0/users';

const getEmployees = async (source) => {
	try {
		const response = await axios.get(API_URL, {
			cancelToken: source.token,
		});

		return response;
	} catch (err) {
		console.error(err);
		throw new Error(err);
	}
};

export default getEmployees;
