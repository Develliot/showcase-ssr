import styled from 'styled-components';
import { ContentWrapper } from 'src/components/Layout';

export const ContentWrapperStyled = styled(ContentWrapper)`
    transition: opacity ease 0.5s, transform ease 0.4s;
    opacity: ${({ visible }: { visible: boolean }) => (visible ? 1 : 0)};
    transform: ${({ visible }: { visible: boolean }) =>
        visible ? `scaleY(1)` : `scaleY(0.85)`};
`;
