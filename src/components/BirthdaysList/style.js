import styled from 'styled-components';

export const Month = styled.h4`
	font-size: 1.4rem;
	margin-bottom: 0.8rem;
	font-weight: 800;
	color: ${({ theme }) => theme.colors.accentColor};
`;

export const BirthdaysItems = styled.ul`
	list-style-type: disc;
	margin-left: 1rem;
	margin-bottom: 1.5rem;
`;

export const StyledBirthdaysList = styled.ul`
	padding: 2rem;
`;

export const NoEmployees = styled.p`
	font-weight: 600;
	font-size: 1.5rem;
	text-decoration: underline;
	text-align: center;
	margin-top: 2rem;
`;

export const ClearBtn = styled.button`
	cursor: pointer;
	position: absolute;
	right: 30px;
	top: 136px;
	font-size: 1.3rem;
	border: 3px solid ${({ theme }) => theme.colors.accentColor};
	padding: 0.5rem 1rem;
	border-radius: 10px;

	&:hover {
		background-color: ${({ theme }) => theme.colors.accentColor};
		color: ${({ theme }) => theme.colors.clearBtnHoverText};
	}

	&:active {
		background-color: #005ac9;
		color: ${({ theme }) => theme.colors.clearBtnHoverText};
		border-color: ${({ theme }) => theme.colors.clearBtnActiveBg};
	}

	&:focus {
		outline: none;
	}
`;