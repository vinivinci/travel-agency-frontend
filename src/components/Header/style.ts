import styled from "styled-components";
import { Link } from 'react-router-dom';
export const Header = styled.header`
    height: 150px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.20);
    display: flex;
    padding: 1rem;
    align-items: center;
    color: #fff;

    .navbar .links{
        display: flex;
        font-size: 16px;
    }
    a{
        
    }
    .navbar .links a{
        margin-left: 1rem;
        color: #fff;
        text-decoration: none;
        
    }

    @media (max-width: 768px) {
        .hambuguer{
            display: block;
        }

        .navbar .links{
            flex-direction: column;
            display: none;
            position: absolute;
            top:220px;
            left: 0;
            right: 0;
            padding: 10px;
            padding-left: 15px;
            background-color: rgba(0, 0, 0, 0.20);
            z-index: 1;
        }
    }
`

export const ProductName = styled.span`
    font-size: 2rem;
    font-weight: 1000;
    margin-left: 1rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`

export const StyledLink = styled(Link)`
    display: inline-flex;
    font-size: 25px;
    font-weight: 700;
    color: #fff;
    align-items: center;
`

export const LoginButton = styled.button`
    background-color: #fff;
    color: #66857A;
    border-radius: 10px;
    margin-left: 68px;
    padding: 13px 20px;
    font-weight: 600;
    display: inline-flex;
    align-items: center;

    &:hover{
        text-decoration: underline;
        background-color: #fff;
    }
`

export const Hamburguer = styled.div`
display: none;
`

export const Logo = styled.div`
height: 100%;
width: 100%;
align-items: center;
display: flex;
object-fit: contain;
`

