import styled from 'styled-components';

export const Overlay = styled.div`
	position: fixed;
	inset: 0;
	background: rgba(0, 0, 0, 0.25);
`;

export const AddWindow = styled.section`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 70%;
	padding: 1.5rem;
	background: #fff;
	border-radius: 12px;
`;

export const InputsContainer = styled.div`
	display: grid;
	grid-gap: 1.3rem;
	margin: 1.5rem 0;
`;

export const Buttons = styled.div`
	display: flex;
	justify-content: flex-end;
`;
