import {
	CHECK_EMPLOYEE,
	UNCHECK_EMPLOYEE,
	CLEAR_SELECTED,
} from 'actions/types';

const selectEmployeeReducer = (state = {}, { type, payload }) => {
	switch (type) {
		case CHECK_EMPLOYEE: {
			const { month, employee } = payload;
			const stateMonth = state[month];

			return stateMonth !== undefined
				? { ...state, [month]: [...stateMonth, employee] }
				: { ...state, [month]: [employee] };
		}
		case UNCHECK_EMPLOYEE: {
			const { month, employee } = payload;
			const filtered = state[month].filter(
				({ id }) => id !== employee.id
			);

			if (filtered.length > 0) {
				return {
					...state,
					[month]: filtered,
				};
			} else {
				const { [month]: value, ...withoutEmptyMonth } = state;

				return withoutEmptyMonth;
			}
        }
        case CLEAR_SELECTED: {
            return {};
        }
		default:
			return state;
	}
};

export default selectEmployeeReducer;
