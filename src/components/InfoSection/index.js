import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, Img, Column2, ImgWrap } from './infoElements'
// import PropTypes from 'prop-types';

const InfoSection = ({ lightBg, id, imgStart, topline, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2 }) => {
    return (
     <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topline}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle lightText={lightText}>{description}</Subtitle>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                        <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
        </>
    );
};


export default InfoSection

