import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 100vw;
    max-width: ${({
        theme: {
            breakpoints: { large },
        },
    }) => large};
    transition: margin ease 0.2s, opacity ease 0.3s;
    margin-top: ${({ visible }: { visible: boolean }) =>
        visible ? `0` : `-100px`};
    opacity: ${({ visible }: { visible: boolean }) => (visible ? `1` : `0`)};
    z-index: 10;
`;

export const HeaderInner = styled.div`
    margin: 0 auto;
    background-color: ${({
        theme: {
            colors: { darkGrey },
        },
    }) => darkGrey};
    padding: ${({
        theme: {
            spacing: { small },
            globalPadding,
        },
    }) => `${small} ${globalPadding}`};
`;

export const Links = styled.ul`
    padding: 0;
    max-width: ${({
        theme: {
            breakpoints: { large },
        },
    }) => large};

    display: flex;
    flex-direction: row;
    list-style-type: none;
    justify-content: flex-start;
`;

export const LogoLink = styled.a`
    text-decoration: none;
`;
