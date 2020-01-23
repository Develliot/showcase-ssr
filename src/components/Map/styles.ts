import styled from 'styled-components';

export const MapWrapper = styled.div`
    width: 100%;
    height: 300px;
    background-color: ${({
        theme: {
            colors: { white },
        },
    }) => white};
`;

export const MarkerWrapper = styled.div`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    overflow: hidden;
    border: ${({
        theme: {
            colors: { darkGrey },
        },
    }) => `solid 1px ${darkGrey}`};
`;

export const MarkerImage = styled.img`
    height: 100%;
    width: 100%;
`;
