import styled from 'styled-components';

export const Button = styled.button`
	background-color: ${({ theme, bgc }) => bgc || theme.colors.green};
	color: ${({ color }) => color || '#FFF'};
	border-radius: ${({ theme }) => theme.radius.main};
	font-weight: 700;
	padding: 0.9rem 1.2rem;
	font-size: inherit;
	border: 1px solid transparent;
	box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
	transition: border, background 0.3s ease;
	cursor: pointer;
	&:hover {
		border: 1px solid ${({ theme, bgc }) => bgc || theme.colors.green};
		color: ${({ color, theme }) => color || theme.colors.green};
		background: #fff;
	}
`;

export const GrayButton = styled.button`
	font-size: ${({ theme }) => theme.fz['200']};
	background: transparent;
	border: none;
	padding: 0.9rem 1.2rem;
	color: ${({ theme }) => theme.colors.light_gray};
	cursor: pointer;
`;
