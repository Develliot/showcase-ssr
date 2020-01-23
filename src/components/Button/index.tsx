import React, { FunctionComponent } from 'react';
import { ColorType } from 'src/theme';

import { ButtonStyled } from './styles';

type Props = {
    color?: ColorType;
    onClick?: () => void;
};

export const Button: FunctionComponent<Props> = ({
    color = 'blue',
    onClick = () => null,
    children,
}) => {
    return (
        <ButtonStyled onClick={onClick} color={color}>
            {children}
        </ButtonStyled>
    );
};

export default Button;
