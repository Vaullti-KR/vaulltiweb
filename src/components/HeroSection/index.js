import React, {useState} from 'react'
// import Video from './vv3.mp4'
import { HeroContainer,  HeroP, ImageCenter } from './HeroElements';
// import { Button } from '../ButtonElements/ButtonElements';
import Logo from "./LogoVaullti.png"

/* eslint-disable no-unused-vars */
const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
/* eslint-enable no-unused-vars */

    return (
        <HeroContainer>
            <ImageCenter>
                <img alt="vaullti logo" style= {{flex:1 , width: undefined, height: undefined}} 
                src={Logo}></img>
            </ImageCenter>
            {/* <HeroBg></HeroBg> */}
            {/* <HeroContent> */}
                {/* <HeroH1>a 3d vault for all, u, and i</HeroH1> */}
                <HeroP></HeroP>
        </HeroContainer>
    )
}

export default HeroSection;
