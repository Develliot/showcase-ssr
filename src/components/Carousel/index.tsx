import React, { FunctionComponent, useState, useRef } from 'react';
import _ from 'underscore';

import {
    CarouselWrapper,
    CarouselCardInner,
    CarouselCard,
    CarouselScrollArea,
    CarouselFadeOutLeft,
    CarouselFadeOutRight,
    LeftButtonContainer,
    RightButtonContainer,
    CarouselButton,
} from './styles';
import { VerticalSpacer } from 'src/components/Layout';
import { Dots } from './Dots';

type Props = {
    onPositionChanged?: (position: number) => void;
};

export const CarouselLeftButton = ({ onClick }: { onClick: () => void }) => (
    <LeftButtonContainer>
        <CarouselButton
            onClick={onClick}
            aria-label='previous user'
        >{`◀`}</CarouselButton>
    </LeftButtonContainer>
);

export const CarouselRightButton = ({ onClick }: { onClick: () => void }) => (
    <RightButtonContainer>
        <CarouselButton
            onClick={onClick}
            aria-label='next user'
        >{`▶`}</CarouselButton>
    </RightButtonContainer>
);

export const Carousel: FunctionComponent<Props> = ({
    children,
    onPositionChanged,
}) => {
    const [currentPosition, setCurrentPosition] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    // remove null children
    const childArray = React.Children.toArray(children).filter(Boolean);

    const getScroll = () => {
        return {
            y: scrollRef.current ? scrollRef.current.scrollTop : undefined,
            x: scrollRef.current ? scrollRef.current.scrollLeft : undefined,
        };
    };

    const setPosition = (to: number) => {
        setCurrentPosition(to);

        if (onPositionChanged) {
            onPositionChanged(to);
        }
    };

    const scrollToPosition = (to: number) => {
        if (scrollRef && scrollRef.current) {
            const rect = scrollRef.current.getBoundingClientRect();
            const width = rect.width;
            const scrollPosition = Math.round(width * 0.8 * to);
            scrollRef.current.scrollTo(scrollPosition, 0);
        }
        setPosition(to);
    };

    const handleScroll = () => {
        if (!scrollRef || !scrollRef.current) {
            return null;
        }
        const rect = scrollRef.current.getBoundingClientRect();
        const width = rect.width;
        const scrollPosition = getScroll().x;
        if (scrollPosition) {
            const currentPosition = Math.round(scrollPosition / (width * 0.8));
            setPosition(currentPosition);
        }
    };

    const handleScrollThrottled = _.throttle(handleScroll, 100);

    const moreOnRight = currentPosition !== childArray.length - 1;
    const moreOnLeft = currentPosition !== 0;

    return (
        <>
            <CarouselWrapper>
                <CarouselScrollArea
                    ref={scrollRef}
                    onScroll={handleScrollThrottled}
                >
                    {childArray.map((child, index) => {
                        const isSelected = index === currentPosition;
                        return (
                            <CarouselCard key={index}>
                                <CarouselCardInner isSelected={isSelected}>
                                    {child}
                                </CarouselCardInner>
                            </CarouselCard>
                        );
                    })}
                </CarouselScrollArea>
                <CarouselFadeOutLeft visible={moreOnLeft} />
                <CarouselFadeOutRight visible={moreOnRight} />
                {moreOnLeft ? (
                    <CarouselLeftButton
                        onClick={() => {
                            scrollToPosition(Math.max(0, currentPosition - 1));
                        }}
                    />
                ) : null}
                {moreOnRight ? (
                    <CarouselRightButton
                        onClick={() => {
                            scrollToPosition(
                                Math.min(
                                    currentPosition + 1,
                                    childArray.length - 1
                                )
                            );
                        }}
                    />
                ) : null}
            </CarouselWrapper>
            <VerticalSpacer size='small' />
            <Dots
                count={childArray.length}
                currentPosition={currentPosition}
                scrollToPosition={scrollToPosition}
            />
        </>
    );
};

export default Carousel;
