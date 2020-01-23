import React, { FunctionComponent } from 'react';
import Header from 'src/components/Header';

export const Page: FunctionComponent = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};

export default Page;
