import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'src/theme';
import GlobalStyle from 'src/globalStyles';
import { Page } from 'src/components/Page';
import { UserProvider } from 'src/contexts/UserContext';

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <ThemeProvider theme={theme}>
                <UserProvider>
                    <GlobalStyle />
                    <Page>
                        <Component {...pageProps} />
                    </Page>
                </UserProvider>
            </ThemeProvider>
        );
    }
}
