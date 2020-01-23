import styled from 'styled-components';

export const TextInputWrapper = styled.div`
    padding-top: 2rem;
    position: relative;
    overflow: hidden;
`;

export const LabelStyled = styled.label`
    position: absolute;
    font-size: ${({
        theme: {
            fontSizes: { medium },
        },
    }) => medium};
    font-weight: 700;
    bottom: 0.5rem;
    left: 0;
    transition: bottom 0.2s, font-size 0.2s;
    opacity: 0.6;
`;

export const InputStyled = styled.input`
    width: 100%;
    border: none;
    border-bottom: ${({
        theme: {
            colors: { lightGrey },
        },
    }) => `0.12rem solid ${lightGrey}`};
    background: none;
    position: relative;
    top: 0;
    left: 0;
    z-index: 1;
    padding: ${({
        theme: {
            spacing: { tiny },
        },
    }) => `${tiny} 0`};
    font-size: ${({
        theme: {
            fontSizes: { medium },
        },
    }) => medium};
    outline: 0;
    transition: border-color 0.3s ease;

    &:focus {
        border-color: ${({
            theme: {
                colors: { darkGrey },
            },
        }) => darkGrey};
    }

    &:focus + ${LabelStyled}, &:not(:placeholder-shown) + ${LabelStyled} {
        z-index: 2;
        bottom: calc(100% - 1.5rem);
        font-size: ${({
            theme: {
                fontSizes: { tiny },
            },
        }) => tiny};
    }
`;
