import selectEmployeeReducer from './selectEmployeeReducer';
import getEmployeesReducer from './getEmployeesReducer';
import {
	CHECK_EMPLOYEE,
	UNCHECK_EMPLOYEE,
    CLEAR_SELECTED,
} from 'actions/types';

describe('getEmployeeReducer', () => {
    const initialState = {
        status: 'idle',
        error: null,
        data: {},
    };

    it('should return the initial state', () => {
        expect(getEmployeesReducer(initialState, {})).toEqual(initialState);
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

    it('should handle CLEAR_SELECTED', () => {
		expect(
			selectEmployeeReducer(
				{
					[month]: [firstEmployee, secondEmployee],
				},
				{
					type: CLEAR_SELECTED
				}
			)
		).toEqual({});
	});
});

