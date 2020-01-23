import { DefaultTheme } from 'styled-components';

export const fontSizes: { [key: string]: string } = {
    extraTiny: '0.6.25rem',
    tiny: '0.75rem',
    small: '0.875rem',
    medium: '1rem',
    large: '1.125rem',
    extraLarge: '1.25rem',
    extraExtraLarge: '1.5rem',
    extraExtraExtraLarge: '3rem',
};

export const breakpoints = {
    large: '1400px',
};

export const globalPadding = '10vw';

export type SpacingType =
    | 'tiny'
    | 'small'
    | 'medium'
    | 'large'
    | 'extraLarge'
    | 'extraExtraLarge';

export const spacing: { [key in SpacingType]: string } = {
    tiny: '0.5rem',
    small: '1rem',
    medium: '1.5rem',
    large: '3rem',
    extraLarge: '4rem',
    extraExtraLarge: '8rem',
};

export type ColorType =
    | 'white'
    | 'darkGrey'
    | 'lightGrey'
    | 'blue'
    | 'pink'
    | 'yellow';

export const colors: { [key: string]: string } = {
    white: '#F3F7F0',
    lightGrey: '#d4d4d4',
    darkGrey: '#343434',
    blue: '#1B4965',
    pink: '#A93F55',
    yellow: '#FFC857',
};

const theme: DefaultTheme = {
    fontSizes,
    breakpoints,
    globalPadding,
    spacing,
    colors,
};

export default theme;
