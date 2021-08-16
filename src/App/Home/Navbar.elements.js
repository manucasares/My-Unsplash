import styled from 'styled-components';

export const Navbar_el = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1.3rem;

    @media ${ ( { theme } ) => theme.mediaQueries.above768 } {
        flex-direction: row;
        button {
            margin-left: auto;
        }
    }
    
`

export const Logo = styled.img.attrs( () => ({
    src: 'images/my_unsplash_logo.svg',
    alt: 'my unsplash'
}) )`
    width: 15rem;
`;