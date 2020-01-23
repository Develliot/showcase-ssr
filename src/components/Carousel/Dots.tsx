import React, { FunctionComponent } from 'react';
import { DotContainer, Dot } from './styles';

type DotProps = {
    count: number;
    currentPosition: number;
    scrollToPosition: (to: number) => void;
};
export const Dots: FunctionComponent<DotProps> = ({
    count,
    currentPosition,
    scrollToPosition,
}) => {
    return (
        <DotContainer>
            {[...Array(count)].map((item, index) => {
                const isSelected = index === currentPosition;
                const scrollTo = () => {
                    scrollToPosition(index);
                };
                return (
                    <Dot key={index} selected={isSelected} onClick={scrollTo} />
                );
            })}
        </DotContainer>
    );
};

export default Dots;
