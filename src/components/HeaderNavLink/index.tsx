import React from 'react';
import { Paragraph } from 'src/components/Typography';
import { RowCenter } from 'src/components/Layout';
import { NavLinkStyled, HoverInidcator, HeaderLinkItem } from './styles';
import Link from 'next/link';

export const HeaderNavLink = ({
    to,
    title,
    selected,
}: {
    to: string;
    title: string;
    selected: boolean;
}) => {
    return (
        <HeaderLinkItem>
            <Link href={to} passHref>
                <NavLinkStyled title={title} tabIndex={0}>
                    <Paragraph color='white'>{title}</Paragraph>
                    <RowCenter>
                        <HoverInidcator selected={selected} />
                    </RowCenter>
                </NavLinkStyled>
            </Link>
        </HeaderLinkItem>
    );
};
