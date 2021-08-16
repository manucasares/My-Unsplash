import styled from 'styled-components';

export const Typography = styled.p`
    font-size: ${ ( { theme, fz } ) => fz || theme.fz[ '300' ] };
    font-weight: ${ ( { fw } ) => fw || '500' };
    color: ${ ( { theme, color } ) => color || theme.colors.dark };
    
`;