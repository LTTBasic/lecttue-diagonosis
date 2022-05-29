import React from 'react'
import { FooterContainer,FooterWrap,FooterLinksContainer,FooterLinksWrapper, FooterLinkItems,FooterLinkTitle,FooterLink  } from './footerElements'
const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About us</FooterLinkTitle>
                        <FooterLink to="/signin">How it works</FooterLink>
                        <FooterLink to="/signin">Testimonials</FooterLink>
                        <FooterLink to="/signin">Careers</FooterLink>
                        <FooterLink to="/signin">Investors</FooterLink>
                        <FooterLink to="/signin">Terms of Service</FooterLink>    
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>미정</FooterLinkTitle>
                        <FooterLink to="/signin">How it works</FooterLink>
                        <FooterLink to="/signin">Testimonials</FooterLink>
                        <FooterLink to="/signin">Careers</FooterLink>  
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Get Start</FooterLinkTitle>
                        <FooterLink to="/signin">Model</FooterLink>
                        <FooterLink to="/signin">Guide</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>TeamMember</FooterLinkTitle>
                        <FooterLink to="/signin">정대기</FooterLink>
                        <FooterLink to="/signin">정근영</FooterLink>
                        <FooterLink to="/signin">정성엽</FooterLink>
                        <FooterLink to="/signin">이승준</FooterLink>
                        <FooterLink to="/signin">양동재</FooterLink>    
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer