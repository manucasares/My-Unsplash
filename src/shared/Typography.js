import styled from 'styled-components';

export const Typography = styled.p.attrs((props) => ({
	for: props.for || null,
}))`
	display: inline-block;
	font-size: ${({ theme, fz }) => fz || theme.fz['300']};
	font-weight: ${({ fw }) => fw || '500'};
	color: ${({ theme, color }) => color || theme.colors.dark};
	text-align: ${({ align }) => align || 'start'};
	margin-bottom: ${({ mb }) => mb || '0'};
`;
