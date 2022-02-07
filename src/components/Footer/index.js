import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink,SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements'
import {FaYoutube, FaInstagram, FaFacebook, FaTwitter,FaLinkedin} from 'react-icons/fa'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle></FooterLinkTitle>
                                <FooterLink to="/login">Login</FooterLink>
                                {/* <FooterLink to="/singin">Partners</FooterLink>
                                <FooterLink to="/singin">Careers</FooterLink>
                                <FooterLink to="/singin">Terms of Serivce</FooterLink> */}
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle></FooterLinkTitle>
                                <FooterLink to="/karl.r@vaullti.com">Contact</FooterLink>
                                {/* <FooterLink to="/singin">Support</FooterLink>
                                <FooterLink to="/singin">Leadership</FooterLink> */}
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle></FooterLinkTitle>
                                {/* <FooterLink to="/singin">Youtube</FooterLink>
                                <FooterLink to="/singin">Instagram</FooterLink>
                                <FooterLink to="/singin">Facebook</FooterLink>
                                <FooterLink to="/singin">Twitter</FooterLink> */}
                                <FooterLink to="/https://www.linkedin.com/in/vaullti-kr/">Linkedin</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle></FooterLinkTitle>
                                {/* <FooterLink to="/singin">Legal</FooterLink>
                                <FooterLink to="/singin">Privacy</FooterLink>
                                <FooterLink to="/singin">Returns</FooterLink> */}
                                <FooterLink to="/https://youtu.be/smyxFfyr8DA">Videos</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            vaullti llc
                        </SocialLogo>
                        <WebsiteRights>vaullti © 2022 All rights reserverd</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
