import React from 'react';
import Header from '../Header';
import * as S from './style';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <S.Layout>

            <S.Content>
                <Header />
                {children}
            </S.Content>
            {/* <Footer /> */}
        </S.Layout>
    );
};

export default Layout;