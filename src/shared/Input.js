import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
	position: relative;
	svg {
		position: absolute;
		top: 50%;
		left: 15px;
		transform: translateY(-50%);
		color: ${({ theme }) => theme.colors.light_gray};
		font-size: ${({ theme }) => theme.fz['400']};
	}
`;

const InputElement = styled.input.attrs((props) => ({
	placeholder: props.placeholder || '',
}))`
	width: 100%;
	padding: ${({ Icon }) =>
		Icon ? '.95rem 1rem .95rem 3.5rem' : '.95rem 1rem'};
	border-radius: ${({ theme }) => theme.radius.main};
	border: 1px solid
		${({ theme, borderColor }) => borderColor || theme.colors.light_gray};
	outline: none;
	&,
	&::placeholder {
		color: ${({ theme }) => theme.colors.light_gray};
		font-size: ${({ theme }) => theme.fz['200']};
	}
`;

export const Input = ({ Icon, placeholder, id, borderColor }) => {
	return (
		<InputContainer>
			{Icon && <Icon />}

			<InputElement
				id={id}
				placeholder={placeholder}
				Icon={!!Icon}
				borderColor={borderColor}
			/>
		</InputContainer>
	);
};
