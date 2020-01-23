import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { useScrollPosition } from 'src/hooks/useScrollPosition';
import urls from 'src/urls';

import { H2 } from 'src/components/Typography';
import { VerticalSpacer } from 'src/components/Layout';
import { HeaderWrapper, HeaderInner, Links } from './styles';

import { HeaderNavLink } from 'src/components/HeaderNavLink';

export const Header = ({
    visible,
    currentRoute,
}: {
    visible: boolean;
    currentRoute: string;
}) => {
    const isSelected = (url: string): boolean => url === currentRoute;

    return (
        <HeaderWrapper visible={visible}>
            <HeaderInner>
                <H2 color='white'>Showcase</H2>
                <VerticalSpacer size='medium' />
                <nav>
                    <Links>
                        <HeaderNavLink
                            to={urls.home}
                            title='Home'
                            selected={isSelected(urls.home)}
                        />
                        <HeaderNavLink
                            to={urls.designSystem}
                            title='Design System'
                            selected={isSelected(urls.designSystem)}
                        />
                        <HeaderNavLink
                            to={urls.usingAPIs}
                            title='Using APIs'
                            selected={isSelected(urls.usingAPIs)}
                        />
                    </Links>
                </nav>
            </HeaderInner>
        </HeaderWrapper>
    );
};

export const HideOnScroll = () => {
    const [hideOnScroll, setHideOnScroll] = useState(true);
    const router = useRouter();

    useScrollPosition(
        ({
            prevPos,
            currPos,
        }: {
            prevPos: { x: number; y: number };
            currPos: { x: number; y: number };
        }) => {
            const isShow = currPos.y >= prevPos.y;
            if (isShow !== hideOnScroll) setHideOnScroll(isShow);
        },
        [hideOnScroll],
        null,
        false,
        300
    );

    return <Header visible={hideOnScroll} currentRoute={router.route} />;
};

export default HideOnScroll;
