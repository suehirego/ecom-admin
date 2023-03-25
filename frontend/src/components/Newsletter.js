import React from 'react';
import styled from 'styled-components';
import media from '../media';

const Container = styled.div`
      display: flex;
      width: 100%;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      background-color: rgba(171, 82, 197, 0.1);
      border-bottom: 0.2px solid gray;;
      padding: 60px 0px;
      gap: 50px;
      ${media.tablet`
            padding: 40px 0px;
      `}
      ${media.mobile`
            padding: 20px 0px;
      `}
`;
const NewsletterContainer = styled.div`
     display: flex;
     align-items: center;
     flex-direction: column;
     justify-content: center;
     ${media.tablet`
            align-items: center;
            padding: 20px 0px;
     `}
     ${media.mobile`
            align-items: center;
            padding: 20px 0px;
     `}
`;
const Title = styled.h3`
      font-size: 15px;
      margin-bottom: 5px;
      
      ${media.tablet`
            font-size: 15px;
      `}
      ${media.mobile`
            font-size: 15px;
     `}
`;
const Desc = styled.div`
      font-size: 13px;
      font-weight: 300;
      color: black;
      margin-bottom: 30px;
      ${media.tablet`
            font-size: 13px;
      `}
`;
const InputContainer = styled.div`
      width: 480px;
      height:50px;
      display: flex;
      justify-content: space-between;
      border: 1px solid lightgray;
      border-radius: 10px;
      ${media.tablet`
            height: 35px;
            width: 280px;
      `}
`;
const Input = styled.input`
      border: none;
      flex: 8;
      padding-left: 20px;
      font-size: 13px;
      background-color: #fbfbfd;
      border-radius: 10px 0 0 10px;
      &:focus{
            outline: none;
      }
      ${media.desktop`
            font-size: 13px;
      `}
      ${media.tablet`
            font-size: 13px;
      `}
`;
const Button = styled.button`
      flex: 2;
      border: none;
      font-size: 17px;
      background-color: #191919;
      color: white;
      padding: 10px;
      border-radius: 0 10px 10px 0;
      ${media.widescreen`
      font-size: 15px;
      display: flex;
      align-items: center;
`}
      ${media.tablet`
            font-size: 14px;
            display: flex;
            align-items: center;
      `}
`;







const Newsletter = () => {

      return (
            <Container>

                  <NewsletterContainer>

                        <Title> SUBSCRIBE FOR UPDATES</Title>
                        <Desc>Get latest offers straight in your inbox.</Desc>

                        <InputContainer>
                              <Input placeholder="Please Enter your Email" />
                              <Button>
                                    Subscribe
                              </Button>
                        </InputContainer>

                  </NewsletterContainer>


            </Container>
      )
}

export default Newsletter