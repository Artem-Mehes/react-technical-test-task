const addEmployeeBirthday = (employee, month) => {
    return {
        type: 'SELECT_EMPLOYEE',
        payload: { employee, month }
    }
}

export default addEmployeeBirthday;