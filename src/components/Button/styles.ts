import styled from 'styled-components';

export const ButtonStyled = styled.button`
    font-size: ${({
        theme: {
            fontSizes: { medium },
        },
    }) => medium};
    padding: ${({
        theme: {
            spacing: { tiny, medium },
        },
    }) => `${tiny} ${medium}`};
    font-weight: 500;
    text-transform: uppercase;
    transition: color 0.3s ease, background-color 0.3s ease;
    background-color: ${({
        color,
        theme: {
            colors,
            colors: { blue },
        },
    }) => (color ? colors[`${color}`] : blue)};
    border-width: 0.12rem;
    border-style: solid;
    border-radius: 1.5rem;
    border-color: ${({
        color,
        theme: {
            colors,
            colors: { blue },
        },
    }) => (color ? colors[`${color}`] : blue)};
    color: ${({
        color,
        theme: {
            colors: { white, darkGrey },
        },
    }) => {
        switch (color) {
            case 'white':
                return darkGrey;
            case 'yellow':
                return darkGrey;
            case 'blue':
                return white;
            case 'pink':
                return white;
            case 'darkGrey':
                return white;
            case undefined:
                return white;
            default:
                return white;
        }
    }};

    &:hover,
    &:focus {
        background-color: ${({
            color,
            theme: {
                colors: { white },
            },
        }) => {
            switch (color) {
                case 'white':
                    return `rgba(0, 0, 0, 0.4)`;
                case 'yellow':
                    return `rgba(0, 0, 0, 0.4)`;
                case 'blue':
                    return white;
                case 'pink':
                    return white;
                case 'darkGrey':
                    return white;
                case undefined:
                    return white;
                default:
                    return white;
            }
        }};
        color: ${({
            color,
            theme: {
                colors,
                colors: { blue },
            },
        }) => (color ? colors[`${color}`] : blue)};
    }
`;
