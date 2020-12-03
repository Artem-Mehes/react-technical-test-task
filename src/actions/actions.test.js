import checkEmployee from './checkEmployee';
import uncheckEmployee from './uncheckEmployee';
import setEmployees from './setEmployees';
import clearSelected from './clearSelected';
import {
	CHECK_EMPLOYEE,
    CLEAR_SELECTED,
	SET_EMPLOYEES,
	UNCHECK_EMPLOYEE,
} from 'constants/ActionTypes';

describe('actions is created correctly', () => {
	const employee = {
		lastName: 'Doe',
	};
	const month = 'February';
	const employees = [employee];

	it('should create an action to check employee', () => {
		const expectedAction = {
			type: CHECK_EMPLOYEE,
			payload: { employee, month },
		};

		expect(checkEmployee(employee, month)).toEqual(expectedAction);
	});

	it('should create an action to uncheck employee', () => {
		const expectedAction = {
			type: UNCHECK_EMPLOYEE,
			payload: { employee, month },
		};

		expect(uncheckEmployee(employee, month)).toEqual(expectedAction);
	});

	it('should create an action to set employees', () => {
		const expectedAction = {
			type: SET_EMPLOYEES,
			employees,
		};

		expect(setEmployees(employees)).toEqual(expectedAction);
    });
    
    it('should create an action to clear selected', () => {
        const expectedAction = {
            type: CLEAR_SELECTED,
        };

        expect(clearSelected()).toEqual(expectedAction);
    });
});
