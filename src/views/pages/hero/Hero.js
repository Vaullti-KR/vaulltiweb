import React, {useState} from 'react'
// import { BrowserRouter, Route, Link } from 'react-router-dom'
import Sidebar from '../../../components/sidebar';
import Navbar from '../../../components/navbar';
import HeroSection from '../../../components/HeroSection';
import InfoSection from '../../../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree} from '../../../components/InfoSection/Data';
import Services from '../../../components/Services';
import Footer from '../../../components/Footer';
import { NavBtn2, NavBtnLink, } from '../../../components/navbar/navbarelements';
import { InfoRow2 } from '../../../components/InfoSection/infoElements';


const Hero = () => {
    const[isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} />
        <HeroSection></HeroSection>
        {/* <Button2 as={Link} exact path="../../register">
                register
        </Button2> */}
        <InfoRow2>        
            <NavBtn2>
            <NavBtnLink to='/register'
            smooth={true} duration={500} spy={true} exact='true' offset={-80}
            >Register Now!</NavBtnLink>
            </NavBtn2>
        </InfoRow2>

        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <Services />
        <InfoSection {...homeObjThree}/>
        <NavBtn2>
            <NavBtnLink to='/register'
            smooth={true} duration={500} spy={true} exact='true' offset={-80}
            >Sign up now!</NavBtnLink>
            </NavBtn2>
        <Footer />
        </>
    )
}

export default Hero;
