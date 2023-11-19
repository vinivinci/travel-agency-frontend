import React, { useState } from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Header: React.FC = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    return (
        <S.Header>
            <S.Logo onClick={() => navigate('/')}>
                <img width={100} src="/logo.png" alt="Logo Petz" />
                <S.ProductName>DESTINO CERTO</S.ProductName>
            </S.Logo>
            <div className={`links ${isMobileMenuOpen ? 'active' : ''}`}>
                <S.StyledLink to="/">
                    <Icon style={{ marginRight: "10px" }} icon="material-symbols:travel" />
                    Pacotes
                </S.StyledLink>
            </div>
            <S.LoginButton>
                <Icon style={{ marginRight: "10px" }} icon="material-symbols:login" />
                Login
            </S.LoginButton>

            <S.Hamburguer onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                ☰
            </S.Hamburguer>
        </S.Header>
    );
};

export default Header;