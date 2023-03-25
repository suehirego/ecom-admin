import React from 'react';
import styled from 'styled-components';
import { 
     FaInstagramSquare, 
     FaFacebookSquare, 
     FaTwitterSquare, 
     FaYoutubeSquare, 
     FaRegCopyright 
} from 'react-icons/fa';
import media from '../media';


const Container = styled.div`
     display: flex;
     align-items: center;
     flex-direction: column;
     justify-content: center;
     background-color: teal;
     padding: 40px 200px 0px 200px;
     ${media.widescreen`
          // background: green;
          padding: 40px 100px;
    `}
     ${media.desktop`
          // background: red;
          padding: 20px 160px;
    `}
     ${media.tablet`
          // background: blue;
          padding: 40px 50px;
    `}
     ${media.mobile`
          // background: yellow;
          padding: 10px 30px;
    `}
`;
const Wrapper = styled.div`
     display: flex;
     align-items: center;
     justify-content: space-between;
     margin-bottom: 50px;
     ${media.mobile`
          margin-bottom: 25px;
          flex-wrap: wrap;
          justify-content: space-between;
          gap:20px;
     `}
`;
const FooterLeft = styled.div`
     flex: 1;
     display: flex;
     gap: 8px;
     flex-direction: column;
     ${media.mobile`
          flex: 1.5;
          align-items: left;
     `} 
`;
const FooterCenter = styled.div`
     flex: 1;
     display: flex;
     gap: 8px;
     flex-direction: column;
     ${media.mobile`
     flex: 1.5;
          align-items: left;
    `} 
`;
const FooterRight = styled.div`
     flex: 1;
     display: flex;
     gap: 8px;
     flex-direction: column;
     ${media.mobile`
          flex: 1.5;
          align-items: left;
     `} 
`;
const Title = styled.p`
     color: #fbfbfd;
     font-size: 13px;
     font-weight: 500;
     margin-bottom: 15px;
     ${media.mobile`
          font-size: 11px;
     `} 
`;
const FooterLink = styled.p`
     font-size: 14px;
     font-weight: 300;
     color: #fbfbfd;
     cursor: pointer;
     margin-bottom: 10px; 
     &:hover{
          color: black;
     }
     ${media.mobile`
          font-size: 11.5px;
          margin-bottom: 5px;
     `}
`;
const FooterIcons = styled.div`
     flex: 1;
     display: flex;
     gap: 16px;
     flex-direction: column;
     ${media.mobile`
          align-items: center;
          margin-top: 28px;
    `} 
`;
const PaymentIcons = styled.div`
     display: flex;
     gap: 8px;
     flex-direction: column;
     ${media.mobile`
          margin-top: 12px;
          align-items: center;
     `} 
`;
const Airtel = styled.img`
     width: 40px;
     ${media.desktop`
          width: 50px;     
    `}
     ${media.tablet`
          
    `}
     ${media.mobile`
          
    `}
`;
const PaymentIconsDiv = styled.div`
     display: flex;
     gap: 8px;
     margin-bottom: 10px;
     ${media.mobile`
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
     `} 
     
`;
const SocialIcons = styled.div`
     display: flex;
     gap: 8px;
     flex-direction: column;
     ${media.mobile`
          align-items: center;
          justify-content: center;
     `} 
`;
const SocialIconsDiv = styled.div`
     display: flex;
     gap: 8px;
`;
const Icon = styled.div`
     color: #fbfbfd;
     font-size: 28px;
     cursor: pointer;
     &:hover{
          color: black;
     }
     ${media.mobile`
     font-size: 20px;
     `} 
`;
const Contact = styled.div`
     width: 100%;
     display: flex;
     align-items: center;
     justify-content: center;
     gap: 5px;
     padding: 30px;
     color: #fbfbfd;
     font-size: 14px;
     font-weight: 300;
     border-top: 0.2px solid lightgray;
     ${media.mobile`
          font-size: 11px;
     `} 
`;
const ContactWrapper = styled.div`
     flex:1;
     display: flex;
     align-items: center;
     justify-content: center;
     gap: 5px;
`;
const CopyRight = styled.div`
     width: 100%;
     display: flex;
     align-items: center;
     justify-content: center;
     gap: 5px;
     padding: 20px;
     color: #fbfbfd;
     font-size: 13px;
     font-weight: 300;
     border-top: 0.2px solid lightgray;
     ${media.mobile`
          font-size: 11px;
     `} 
`;



const FooterCom = () => {

     return (
          <Container>

               <Wrapper>

                    <FooterLeft>
                         <Title>HELP CENTER</Title>
                         <FooterLink>Help</FooterLink>
                         <FooterLink>Returns</FooterLink>
                         <FooterLink>Size Guide</FooterLink>
                    </FooterLeft>

                    <FooterCenter>
                         <Title>COMPANY</Title>
                         <FooterLink>About Us</FooterLink>
                         <FooterLink>Diversity</FooterLink>
                         <FooterLink>Giving Back</FooterLink>
                    </FooterCenter>

                    <FooterRight>
                         <Title>QUICK LINKS</Title>
                         <FooterLink>Terms & Conditions</FooterLink>
                         <FooterLink>Privacy Policy</FooterLink>
                         <FooterLink>Campaigns</FooterLink>
                    </FooterRight>

                    <FooterIcons>
                         <PaymentIcons>
                              <Title>PAYMENT OPTIONS</Title>
                              <PaymentIconsDiv>

                                   <img
                                        style={{
                                             width: '18%',
                                             height: '18%',
                                             cursor: 'pointer',
                                        }}
                                        src={process.env.PUBLIC_URL + '/visa.png'}
                                        alt=""
                                   />
                                   <img
                                        style={{
                                             width: '13%',
                                             height: '0%',
                                             cursor: 'pointer',
                                        }}
                                        src={process.env.PUBLIC_URL + '/mastercard.png'}
                                        alt=""
                                   />
                                   <img
                                        style={{
                                             width: '18%',
                                             height: '18%',
                                             cursor: 'pointer',
                                        }}
                                        src={process.env.PUBLIC_URL + '/mtn.png'}
                                        alt=""
                                   />
                                   <Airtel
                                        src={process.env.PUBLIC_URL + '/airtel.png'}
                                        alt=""
                                   />

                              </PaymentIconsDiv>

                         </PaymentIcons>

                         <SocialIcons>
                              <Title>FOLLOW US</Title>
                              <SocialIconsDiv>
                                   <Icon><FaInstagramSquare /></Icon>
                                   <Icon><FaFacebookSquare /></Icon>
                                   <Icon><FaTwitterSquare /></Icon>
                                   <Icon><FaYoutubeSquare /></Icon>
                              </SocialIconsDiv>


                         </SocialIcons>

                    </FooterIcons>

               </Wrapper>

               <Contact>
                    <ContactWrapper>
                         +256 770 000 000
                    </ContactWrapper>
                    <ContactWrapper>
                         support@sheboss.com
                    </ContactWrapper>
                    <ContactWrapper>
                         help.sheboss.com
                    </ContactWrapper>
               </Contact>


               <CopyRight>
                    <FaRegCopyright />
                    <p>2022</p>
                    <p>SHEBOSS LIMITED.</p>
                    <p>All rights reserved</p>
               </CopyRight>

          </Container>
     )
}

export default FooterCom