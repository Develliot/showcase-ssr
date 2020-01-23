import React from 'react';
import { TextInputWrapper, InputStyled, LabelStyled } from './styles';

type Props = {
    name: string;
    labelText: string;
    required?: boolean;
};

export const TextInput = ({ name, labelText, required = false }: Props) => {
    return (
        <TextInputWrapper>
            <InputStyled
                placeholder=' '
                type='text'
                required={required}
                name={name}
            />
            <LabelStyled>{labelText}</LabelStyled>
        </TextInputWrapper>
    );
};

export default TextInput;
