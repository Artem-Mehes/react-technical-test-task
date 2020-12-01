import styled, { keyframes } from 'styled-components';

const preloaderAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Preloader = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	&::after {
		content: '';
		display: block;
		width: 150px;
		height: 150px;
		border-radius: 50%;
		border: 6px solid ${({ theme }) => theme.colors.accentColor};
		border-color: #000 transparent #000 transparent;
		border-color: ${({ theme }) =>
			`${theme.colors.accentColor} transparent ${theme.colors.accentColor} transparent`};
		animation: ${preloaderAnimation} 2s linear infinite;
	}
`;
