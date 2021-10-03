import React from 'react';
import {Box, Container , Row, Column , Heading, FooterLink} from './FooterStyled';

function Footer() {
    return (
        <Box style={{color:'#fff'}}>
          
          <Container>
              <Row>
            <Column>
                <Heading>Get to Know Us</Heading>
                <FooterLink href="#">About Us</FooterLink>
                <FooterLink href="#">Careers</FooterLink>
                <FooterLink href="#">Press Releases</FooterLink>
                <FooterLink href="#">Amazon Cares</FooterLink>
                <FooterLink href="#">Gift a Smile</FooterLink>
           </Column>
               <Column>
                <Heading>Connect with Us</Heading>
                <FooterLink href="#">Facebook</FooterLink>
                <FooterLink href="#">Twitter</FooterLink>
                <FooterLink href="#">Instagram</FooterLink>
               </Column>
               <Column>
                <Heading>Make Money with Us</Heading>
                <FooterLink href="#">Sell on Amazon</FooterLink>
                <FooterLink href="#">Amazon Global Selling</FooterLink>
                <FooterLink href="#">Become an Affiliate</FooterLink>
                <FooterLink href="#">Advertise Your Products</FooterLink>
                <FooterLink href="#">Fulfilment by Amazon</FooterLink>
               </Column>
               <Column>
                <Heading>Let Us Help You</Heading>
                <FooterLink href="#">Your Account</FooterLink>
                <FooterLink href="#">Returns Centre</FooterLink>
                <FooterLink href="#">100% Purchase Protection</FooterLink>
                <FooterLink href="#">Amazon App Download</FooterLink>
                <FooterLink href="#">Help</FooterLink>
               </Column>

               
               </Row>
            </Container>
        </Box>
    );
}

export default Footer;