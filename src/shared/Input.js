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
	name: props.name,
	value: props.value,
	autoComplete: 'off',
}))`
	width: 100%;
	padding: ${({ Icon }) =>
		Icon ? '.95rem 1rem .95rem 3.5rem' : '.95rem 1rem'};
	border-radius: ${({ theme }) => theme.radius.main};

	border: 1px solid
		${({ theme, dark }) => (dark ? theme.colors.dark : theme.colors.light_gray)};
	color: ${({ theme, dark }) =>
		dark ? theme.colors.dark : theme.colors.light_gray};
	outline: none;

	&::placeholder {
		color: ${({ theme }) => theme.colors.light_gray};
		font-size: ${({ theme }) => theme.fz['200']};
	}
`;

export const Input = ({
	Icon,
	placeholder,
	id,
	dark,
	name,
	value,
	onChange,
}) => {
	return (
		<InputContainer>
			{Icon && <Icon />}

			<InputElement
				id={id}
				placeholder={placeholder}
				Icon={!!Icon}
				dark={!!dark}
				name={name}
				value={value}
				onChange={onChange}
			/>
		</InputContainer>
	);
};
