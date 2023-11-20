import React, { useEffect, useState } from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const [isLogged, setIsLogged] = useState(false);
    const [userName, setUserName] = useState<string>('');
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleDropdown = () => setShowDropdown(!showDropdown);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setIsLogged(false);
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log(token);
        if (token) {
            setIsLogged(true);
        }
    }, [])

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user') as string);
        setUserName(user?.name || '');
    }, [isLogged])

    const getInitials = (name: string) => {
        console.log(name)
        if (!name || name === '') {
            return '';
        }
        let initials = name.split(' ').map((n) => n[0]).join('');
        if (initials.length > 2) {
            initials = initials.substring(0, 2);
        }
        return initials.toUpperCase();
    };

    return (
        <S.Header>
            <S.Logo onClick={() => navigate('/')}>
                <img src="/logo.png" alt="Logo" width="100" />
                <S.ProductName>DESTINO CERTO</S.ProductName>
            </S.Logo>
            <S.MobileMenuIcon onClick={toggleMobileMenu}>
                <Icon icon="mdi:menu" />
            </S.MobileMenuIcon>
            <S.NavLinks className={isMobileMenuOpen ? 'open' : ''}>
                <S.StyledLink to="/">
                    <Icon style={{ marginRight: "10px" }} icon="material-symbols:home" />
                    Inicio
                </S.StyledLink>
                <S.StyledLink to="/pacotes" >
                    <Icon style={{ marginRight: "10px" }} icon="material-symbols:travel" />
                    Pacotes
                </S.StyledLink>
                {
                    isLogged && <S.StyledLink to="/pacotes" >
                        <Icon style={{ marginRight: "10px" }} icon="ion:book" />
                        Reservas
                    </S.StyledLink>
                }

            </S.NavLinks>
            {
                !isLogged ? (
                    <S.LoginButton onClick={() => navigate('/login', {
                        state: {
                            redirectUrl: window.location.pathname
                        }
                    })}>
                        <Icon style={{ marginRight: "10px" }} icon="material-symbols:login" />
                        Login
                    </S.LoginButton>
                )
                    : (
                        <>
                            <S.UserInitialsCircle onClick={toggleDropdown}>
                                {getInitials(userName)}
                            </S.UserInitialsCircle>
                            <S.DropdownMenu className={showDropdown ? 'show' : ''}>
                                <S.DropdownItem onClick={() => navigate('/edit-profile')}>
                                    Editar Perfil
                                </S.DropdownItem>
                                <S.DropdownItem onClick={handleLogout}>
                                    Logout
                                </S.DropdownItem>
                            </S.DropdownMenu>

                        </>
                    )
            }
        </S.Header>
    );
};

export default Header;
