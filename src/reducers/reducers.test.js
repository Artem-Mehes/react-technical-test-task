import setEmployeesReducer from './setEmployeesReducer';
import selectEmployeeReducer from './selectEmployeeReducer';
import {
	SET_EMPLOYEES,
	CHECK_EMPLOYEE,
	UNCHECK_EMPLOYEE,
} from 'constants/ActionTypes';

describe('setEmployeesReducer', () => {
	const employees = [{ lastName: 'Doe' }, { lastName: 'Smith' }];

	it('should return the initial state', () => {
		expect(setEmployeesReducer(undefined, {})).toEqual([]);
	});

	it('should handle SET_EMPLOYEES', () => {
		expect(
			setEmployeesReducer([], {
				type: SET_EMPLOYEES,
				employees,
			})
		).toEqual(employees);
	});
});

describe('selectEmployeeReducer', () => {
	const firstEmployee = { lastName: 'Doe', id: '12345' };
	const month = 'February';
	const secondEmployee = { lastName: 'Smith', id: '6789' };

	it('should return the initial state', () => {
		expect(selectEmployeeReducer(undefined, {})).toEqual({});
	});

	it('should handle CHECK_EMPLOYEE', () => {
		expect(
			selectEmployeeReducer(
				{},
				{
					type: CHECK_EMPLOYEE,
					payload: { employee: firstEmployee, month },
				}
			)
		).toEqual({
			[month]: [firstEmployee],
		});

		expect(
			selectEmployeeReducer(
				{
					[month]: [firstEmployee],
				},
				{
					type: CHECK_EMPLOYEE,
					payload: { employee: secondEmployee, month },
				}
			)
		).toEqual({
			[month]: [firstEmployee, secondEmployee],
		});
    });
    
    it('should handle UNCHECK_EMPLOYEE', () => {
        expect(
            selectEmployeeReducer(
                {
                    [month]: [firstEmployee]
                },
                {
                    type: UNCHECK_EMPLOYEE,
                    payload: { employee: firstEmployee, month },
                }
            )
        ).toEqual({});

        expect(
			selectEmployeeReducer(
				{
					[month]: [firstEmployee, secondEmployee],
				},
				{
					type: UNCHECK_EMPLOYEE,
					payload: { employee: secondEmployee, month },
				}
			)
		).toEqual({
			[month]: [firstEmployee],
		});
    });
});
