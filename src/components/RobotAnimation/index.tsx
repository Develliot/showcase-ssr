import React from 'react';

import { VerticalSpacer } from 'src/components/Layout';
import { H2, Paragraph } from 'src/components/Typography';
import {
    RobotWrapper,
    WholeRobot,
    RoboBody,
    Neck,
    Wheel1,
    Wheel2,
    WheelHub,
    Arm,
    ArmTop,
    Hand,
    Signal,
    Arial,
    BallEnd,
    Head,
    Face,
    EyeLeft,
    EyeRight,
    ContentWrapperFloating,
} from './styles';

export const RobotAnimation = () => {
    return (
        <RobotWrapper>
            <WholeRobot>
                <Neck />
                <RoboBody />
                <Wheel1 />
                <Wheel2 />
                <WheelHub />
                <Arm>
                    <Hand />
                    <ArmTop />
                </Arm>
                <Signal />
                <Arial>
                    <BallEnd />
                </Arial>
                <Head>
                    <Face>
                        <EyeLeft />
                        <EyeRight />
                    </Face>
                </Head>
            </WholeRobot>
            <ContentWrapperFloating>
                <VerticalSpacer size='extraLarge' />
                <H2 color='white'>A Robot</H2>
                <VerticalSpacer size='medium' />
                <Paragraph color='white'>
                    It turns out that finding a decent animation library that
                    will play ball with TypeScript and React hooks is actually a
                    big ask. Those that do interesting tweens seem to rely on
                    DOM events. All the others don't seem to do anything that
                    CSS3 animations can't do out of the box. So I made this
                    animation in plain old CSS.
                </Paragraph>
                <VerticalSpacer size='small' />
            </ContentWrapperFloating>
        </RobotWrapper>
    );
};

export default RobotAnimation;
