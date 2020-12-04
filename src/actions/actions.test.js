import checkEmployee from './checkEmployee';
import uncheckEmployee from './uncheckEmployee';
import clearSelected from './clearSelected';
import {
	CHECK_EMPLOYEE,
    CLEAR_SELECTED,
	UNCHECK_EMPLOYEE,
} from 'actions/types';

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
    
    it('should create an action to clear selected', () => {
        const expectedAction = {
            type: CLEAR_SELECTED,
        };

        expect(clearSelected()).toEqual(expectedAction);
    });
});
