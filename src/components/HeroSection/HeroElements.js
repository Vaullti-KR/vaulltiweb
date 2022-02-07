import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';

export const HeroContainer = styled.div`
background: black;
display: flex;
align-items: center;
width: 100%;
padding: 0;
height: 100%;
position: relative;
z-index: 0;
`;

export const HeroBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
overflow: hidden;
`;

export const VideoBg = styled.video`
width: 100%;
height: 100%;
position: relative;
object-fit: cover;
background: white;
z-index: 1;
`;

export const HeroContent = styled.div`
z-index: 3;
color: red;
width: 100%;
height: 560px;
position: relative;
display: flex;
flex-direction: column;
align-items: center;
z-index: 3;

@media screen and (max-width: 480px) {
    font-size: 18px;
    height: 660px;
    z-index: 5;
}
`


export const HeroH1 = styled.h1`
color: #fff;
position: relative;
font-size: 48px;
text-align: center;
z-index: 5;

@media screen and (max-width: 768px) {
    font-size: 22px;
}

@media screen and (max-width: 480px) {
    font-size: 22px;
    z-index: 5;
}
`

export const HeroP = styled.p`
margin-top: 30px;
color: black;
font-size: 50px;
text-align: center;
max-width: 700px;
z-index: 5;
@media screen and (max-width: 768px) {
    font-size: 30px;
}

@media screen and (max-width: 480px) {
    font-size: 30px;
}
`
export const HeroBtnWrapper = styled.div`
color: black;
margin-top: 300px;
display: flex;
flex-direction: column;
align-items: center;
z-index: 6;
`

export const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;
`;
export const ImageCenter = styled.div`
display: flex;
flex: 1;
align-items: center;
justify-content: center;
background: black;
z-index: 0;
`;