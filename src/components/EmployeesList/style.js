import styled from 'styled-components';

export const StyledEmployeesList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding-left: 1rem;
`;

export const EmployeesColumn = styled.li`
    width: 20%;
    background-color: #fff;
    border-radius: 17px;
    padding: 1rem 1.5rem;
    min-width: 196px;
    margin: 0 1.3rem 2rem;
`;

export const Letter = styled.h3`
    margin-bottom: 1rem;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.accentColor};
`;