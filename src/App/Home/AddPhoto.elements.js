import styled from 'styled-components';

export const Overlay = styled.div`
	position: fixed;
	inset: 0;
	background: rgba(0, 0, 0, 0.25);
	z-index: 1000;
`;

export const AddWindow = styled.section.attrs((props) => ({
	className: 'animate__animated annimate__fadeIn',
}))`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: min(70%, 600px);
	padding: 2rem;
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
