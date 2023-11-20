import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Header = styled.header`
    width: 100%;
    background-color: rgba(0, 0, 0, 0.20);
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    align-items: center;
    z-index: 9;
    position: absolute; 
    color: #fff;
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    img {
        width: auto; 
        height: 50px; 
    }
`;

export const ProductName = styled.span`
    font-size: 2rem;
    font-weight: 1000;
    margin-left: 1rem;
    min-width: 40vw;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export const NavLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 70vw;
    @media (max-width: 768px) {
        display: none; 
        flex-direction: column;
        width: 100%;
        position: absolute;
        top: 100%; 
        left: 0;
        background-color: rgba(0, 0, 0, 0.2); 

        &.open {
            display: flex;
            cursor: pointer;
             &:hover {
            background-color: rgba(0, 0, 0, 0.5); 
        }
        }
       
    }
`;

export const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    font-size: 1rem;
    font-weight: 700;
    color: #fff;
    margin: 0rem 2rem;
`;

export const LoginButton = styled.button`
    background-color: #fff;
    color: #66857A;
    border-radius: 10px;
    padding: 10px 20px;
    font-weight: 600;
    display: flex;
    align-items: center;
    margin-left: 3rem;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
        background-color: #f7f7f7;
    }
     @media (max-width: 768px) {
        display: none;
    }
`;

export const MobileMenuIcon = styled.div`
    display: none;
    
    @media (max-width: 768px) {
        display: block;
    }

    svg {
        font-size: 24px;
        color: #fff;
    }
`;

export const UserInitialsCircle = styled.div`
    background-color: #66857A; 
    color: #fff;
    border-radius: 50%; 
    width: 40px;
    height: 40px; 
    display: flex;
    justify-content: center;
    padding: 15px;
    align-items: center;
    font-weight: 600;
    margin-left: 3rem;
    cursor: pointer;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const DropdownMenu = styled.div`
  display: none;
  position: absolute;
  right: 1rem; 
  top: 70px; 
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  width: 200px; 
  z-index: 1000;

  &.show {
    display: block;
  }
`;

export const DropdownItem = styled.div`
  padding: 10px;
  color: #66857A;
  cursor: pointer;
  &:hover {
    background-color: #f2f2f2;
  }
`;