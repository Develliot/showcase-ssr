import styled, { keyframes } from 'styled-components';
import { ContentWrapper } from 'src/components/Layout';

const keyFrameWheelWobble = keyframes`
    0% {
        transform rotate(0deg)
    }
    50% {
        transform rotate(180deg)
    }
    100% {
        transform rotate(360deg)
    }
`;

const keyFrameBodyRock = keyframes`
    0% {
        transform skew(0deg, 0deg)
    }
    25% {
        transform skew(1deg, 0deg)
    }
    50% {
        transform skew(0deg, 0deg)
    }
    100% {
        transform skew(-1deg, 0deg)
    }
`;

const keyFrameArm = keyframes`
    0% {
        transform rotate(0deg)
    }
    50% {
        transform rotate(30deg)
    }
    100% {
        transform rotate(0deg)
    }
`;

const keyFrameHeadbop = keyframes`
    0% {
        transform: translate(0, 0)
    }
    50% {
        transform: translate(0, -2px)
    }
    100% {
        transform: translate(0, 0)
    }
`;
const keyFrameSignal = keyframes`
    0% {
        opacity: 1;
        transform: scale(1);
    }
    90% {
        opacity: 0;
    }
    100% {
        opacity: 0;
        transform: scale(8);
    }
`;

const keyFrameEye = keyframes`
    0% {
        height: 20px;
    }
    10% {
        height: 20px;
    }
    12% {
        height: 0px;
    }
    15% {
        height: 20px
    }

    80% {
        transform scale(1);
    }
    82% {
        transform scale(1.3);
    }
    87% {transform scale(1);
    }
    100% {
        height: 20px;
    }
`;

const keyFrameJourney = keyframes`
    0%{
        /* transform: translate(0, 400px) */
        transform: translate(0, 200%) scale(1) rotate(0deg)
    }
    7%{
        /* transform: translate(0, 400px) */
        transform: translate(0, 50%) scale(1.5) rotate(-30deg)
    }
    14%{
        /* transform: translate(0, 100px) */
        transform:  translate(0, 50%) scale(1.5) rotate(-30deg)
    }
    18%{
        /* transform: translate(0, 100px) */
        transform:  translate(0, 200%) 
    }
    19%{
        /* transform: translate(0, 100px) */
        transform:  translate(150%, 200%) scale(1)
    }
    20%{
        /* transform: translate(0, 100px) */
        transform:  translate(1000px, 0) rotate(-20deg)
    }

    99%{
        /* transform: translate(0, 0) */
        transform: translate(-1000px, 0) 
    }

    100%{
        /* transform: translate(0, 0) */
        transform: translate(-1000px, 200%) rotate(0deg)
    }
`;

export const ContentWrapperFloating = styled(ContentWrapper)`
    position: absolute;
    z-index: 2;
    background: ${({
        theme: {
            colors: { blue },
        },
    }) => `linear-gradient(to bottom, ${blue} 85%, rgba(0,0,0,0)) 15%`};
`;

export const RobotWrapper = styled.div`
    position: relative;
    height: 600px;
    width: 100%;
    overflow: hidden;
    z-index: 0;
`;
export const WholeRobot = styled.div`
    position: absolute;
    width: 200px;
    height: 300px;
    left: calc(50% - 200px / 2);
    bottom: 0;
    animation: ${keyFrameJourney} 10s linear 0s infinite;
    z-index: 1;
`;

export const Neck = styled.div`
    position: absolute;
    width: 20px;
    height: 40px;
    background-color: #555;
    border-radius: 6%;
    left: calc(50% - 10px);
    top: 100px;
`;

export const Arial = styled.div`
    position: absolute;
    width: 4px;
    height: 30px;
    background-color: #555;
    border-radius: 6%;
    left: calc(50% - 2px);
    top: 20px;
    animation: ${keyFrameHeadbop} 0.4s ease-in-out 0s infinite;
`;

export const BallEnd = styled.div`
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #555;
    background: radial-gradient(#555, #888);
    border-radius: 50%;
    left: calc(50% - 5px);
    top: 0;
    animation: ${keyFrameHeadbop} 0.4s ease-in-out 0s infinite;
`;

export const Signal = styled.div`
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: #555;
    background: radial-gradient(transparent, #888);
    border-radius: 50%;
    left: calc(50% - 15px);
    top: 0;
    animation: ${keyFrameSignal} 2s ease 0s infinite;
`;

export const RoboBody = styled.div`
    position: absolute;
    width: 140px;
    height: 150px;
    background: radial-gradient(#555, #888);
    border-radius: 6%;
    left: calc(50% - 140px / 2);
    bottom: 24px;
    animation: ${keyFrameBodyRock} 1s ease-in-out 0s infinite;
`;

export const Wheel1 = styled.div`
    position: absolute;
    width: 36px;
    height: 40px;
    background-color: #222;
    border-radius: 50%;
    left: 40px;
    bottom: 0px;
    animation: ${keyFrameWheelWobble} 0.8s linear 0s infinite;
`;

export const Wheel2 = styled.div`
    position: absolute;
    width: 40px;
    height: 36px;
    background-color: #222;
    border-radius: 50%;
    right: 40px;
    bottom: 0px;
    animation: ${keyFrameWheelWobble} 0.8s linear 0s infinite;
`;

export const WheelHub = styled.div`
    position: absolute;
    width: 20px;
    height: 0;
    border-left: 80px solid transparent;
    border-right: 80px solid transparent;
    border-bottom: 70px solid #666;
    border-radius: 50px;
    left: 10px;
    bottom: 20px;
    animation: ${keyFrameBodyRock} 1s ease-in-out 0s infinite;
`;

export const Arm = styled.div`
    position: relative;
    text-align: center;
    width: 40px;
    height: 100px;
    margin-left: 80px;
    margin-top: 150px;
    transform-origin: top;
    animation: ${keyFrameArm} 0.8s linear 0s infinite;
`;
export const ArmTop = styled.div`
    position: absolute;
    text-align: center;
    left: 5px;
    top: 0px;
    height: 100px;
    width: 30px;
    background-color: #444;
    border-radius: 10px;
    box-shadow: 7px 10px 22px 0px rgba(0, 0, 0, 0.75);
`;

export const Hand = styled.div`
    position: absolute;
    right: 5px;
    bottom: 0px;
    height: 30px;
    width: 60px;
    border-radius: 50%;
    background-color: #333;
    border-radius: 10px;
`;

export const Head = styled.div`
    position: absolute;
    height: 65px;
    width: 100px;
    top: 50px;
    left: 50px;
    border-radius: 50%;
    background-color: #777;
    background: radial-gradient(#888, #555);
    border-radius: 10px;
    animation: ${keyFrameHeadbop} 0.4s linear 0s infinite;
`;

export const Face = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
`;

export const EyeLeft = styled.div`
    position: absolute;
    height: 20px;
    width: 20px;
    top: 20px;
    left: 20px;
    border-radius: 50%;
    background-color: #777;
    background: radial-gradient(#333, #111);
    border-radius: 10px;
    animation: ${keyFrameEye} 4s linear 0s infinite;
`;

export const EyeRight = styled(EyeLeft)`
    left: auto;
    right: 20px;
`;
