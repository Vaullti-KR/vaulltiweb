import React, {useState, useEffect} from 'react';
// import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks,NavBtn,NavBtnLink, NavbarContainer2 } from './navbarelements';
import { IconContext } from 'react-icons/lib';
import {animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = ()=> {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
}, []);

const toggleHome = () => {
    scroll.scrollToTop();
};

    return (
    <>
    <IconContext.Provider value={{ color: 'white' }}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome}></NavLogo>
                <MobileIcon onClick={toggle}>
                    {/* <FaBars /> */}
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about'
                        smooth={true} duration={500} spy={true} exact='true' offset={-80}
                        >About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='platform'
                        smooth={true} duration={500} spy={true} exact='true' offset={-80}
                        >Platform</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='signup'
                        smooth={true} duration={500} spy={true} exact='true' offset={-80}
                        >Register</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
            <NavbarContainer2>
                    <NavBtn>
                        <NavBtnLink to='/login'
                        smooth={true} duration={500} spy={true} exact='true' offset={-80}
                        >Login</NavBtnLink>
                    </NavBtn>
            </NavbarContainer2>

        </Nav>
    </IconContext.Provider>
    </>
    );
};

export default Navbar;
