import styled from 'styled-components';

export const PhotoContainer = styled.div`
	position: relative;
	margin-bottom: 0.8rem;
	overflow: hidden;
	&::before {
		content: attr(data-label);
		position: absolute;
		color: white;
		left: 25px;
		bottom: -50px;
		font-size: ${({ theme }) => theme.fz['300']};
		transition: bottom 0.3s ease;
		z-index: 1000;
	}

	&:hover button {
		display: block;
	}

	&:hover::before {
		bottom: 30px;
	}
`;

export const Photo = styled.img.attrs((props) => ({
	src: props.src || 'https://bitsofco.de/content/images/2018/12/broken-1.png',
	alt: props.alt,
}))`
	border-radius: 16px;
	opacity: 0.8;
	object-fit: cover;
	vertical-align: middle;
	transition: filter 0.3s ease;
	cursor: pointer;
`;

export const DeleteButton = styled.button`
	display: none;
	position: absolute;
	padding: 0.6rem 1.5rem;
	font-weight: 400;
	font-size: ${({ theme }) => theme.fz['200']};
	top: 5px;
	right: 5px;
	color: ${({ theme }) => theme.colors.red};
	border: 1px solid ${({ theme }) => theme.colors.red};
	background: transparent;
	border-radius: 2.375rem;
	transition: filter 0.3s ease;
	cursor: pointer;
	z-index: 9999;

	&:hover + img,
	& + img:hover {
		filter: brightness(45%);
	}
`;
