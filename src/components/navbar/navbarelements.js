import styled from 'styled-components'
import {Link as LinkR } from 'react-router-dom'
import {Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? 'white' : 'white')};
    height: 50px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    position: sticky;
    width: 100%;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;
export const NavbarContainer = styled.div`
    color: white;
    display: flex;
    font-size: 1.5rem;
    justify-content: right;
    height: 80px;
    z-index: 2;
    width: 100%;
    padding: 0 2px;
`;

export const NavbarContainer2 = styled.div`
    color: red;
    display: flex;
    font-size: 8px;
    justify-content: center;
    height: 50px;
    z-index: 0;
    width: 35%;
    padding: 0 8px;
`;

export const NavLogo = styled(LinkR)`
    color: #666666;
    font-size: 50px;
    cursor: pointer;
    align-items: center;
    margin-left: .5px;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: .5;
        right: 0;
        transform: translated(-100%, 60%);
        front-size: 1.8rem;
        cursor: pointer;
        color: #3399cc;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    list-styles: none;
    text-align: center;
    margin-right: 22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
    justify-content: space-between;
`;

export const NavLinks = styled(LinkS)`
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    padding: 0 5.5rem;
    height: 100%;
    cursor: pointer;

&.active{
    border-bottom: 3px solid #3399cc;
}   
`;

export const NavBtn = styled.nav`
    color: black;
    background: white; 
    display: flex;
    font-size: 8px;
    position: right;
    justify-content: right;
    z-index: 2;

    @media screen and (max-width: 768px) {

    }
`;

export const NavBtn2 = styled.nav`
    color: black;
    background: white; 
    display: flex;
    font-size: 4rem;
    align-items: center;
    position: center;
    justify-content: center;
    z-index: 2;
    width: 100%;
    padding: 0 2px;
`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 1px;
    margin-top: 5px;
    margin-bottom: 5px;
    background: white;
    padding: 2px 2px;
    color: black;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: grey;
        color: #3399cc;
    }
`;