import styled, { keyframes } from 'styled-components';

const keyFrameLoadingGrowShirnk = keyframes`
    0% {
        width: 0%;
    }
    50% {
        width: 100%;
    }
    100% {
        width: 0%;
    }
`;

export const UserCardWrapper = styled.div`
    overflow: hidden;
`;

export const CoverColor = styled.div`
    background-color: ${({ color }) => color};
    width: 100%;
    height: 150px;
    position: relative;
`;

export const BottomHalf = styled.div`
    background-color: ${({
        theme: {
            colors: { white },
        },
    }) => white};
    padding: ${({
        theme: {
            globalPadding,
            spacing: { large },
        },
    }) =>
        `${large} calc(${globalPadding} / 2 ) ${large} calc(${globalPadding} / 2 )`};
`;

export const ImageWrapper = styled.div`
    height: 128px;
    width: 128px;
    border-radius: 6px;
    overflow: hidden;
    border: ${({
        theme: {
            colors: { lightGrey },
        },
    }) => `solid 1px ${lightGrey}`};
    position: absolute;
    bottom: -40px;
`;

export const ImageContainer = styled.img`
    height: 128px;
    width: 128px;
`;

export const LoadingCoverColor = styled.div`
    background-color: ${({
        theme: {
            colors: { lightGrey },
        },
    }) => lightGrey};
    width: 100%;
    height: 150px;
    position: relative;
`;

export const LoadingImageWrapper = styled.div`
    height: 128px;
    width: 128px;
    border-radius: 6px;
    overflow: hidden;
    border: ${({
        theme: {
            colors: { white },
        },
    }) => `solid 1px ${white}`};
    background-color: ${({
        theme: {
            colors: { lightGrey },
        },
    }) => lightGrey};
    position: absolute;
    bottom: -40px;
`;

export const LoadingH3 = styled.div`
    background-color: ${({
        theme: {
            colors: { lightGrey },
        },
    }) => lightGrey};
    width: 80%;
    height: ${({
        theme: {
            fontSizes: { extraExtraLarge },
        },
    }) => extraExtraLarge};
    position: relative;
`;

export const LoadingParagraph = styled.div`
    background-color: ${({
        theme: {
            colors: { lightGrey },
        },
    }) => lightGrey};
    width: 70%;
    height: ${({
        theme: {
            fontSizes: { medium },
        },
    }) => medium};
    position: relative;
    margin-bottom: 0.45rem;
`;

export const AnimatedRows = styled.div`
    div:nth-child(5) {
        animation: ${keyFrameLoadingGrowShirnk} 4s ease 0.5s infinite;
    }
    div:nth-child(4) {
        animation: ${keyFrameLoadingGrowShirnk} 4s ease 1s infinite;
    }
    div:nth-child(3) {
        animation: ${keyFrameLoadingGrowShirnk} 4s ease 0.5s infinite;
    }
    div:nth-child(2) {
        animation: ${keyFrameLoadingGrowShirnk} 4s ease 0.3s infinite;
    }
    div:nth-child(1) {
        animation: ${keyFrameLoadingGrowShirnk} 4s ease 0s infinite;
    }
`;
