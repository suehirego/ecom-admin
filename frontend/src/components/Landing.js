import React from 'react';
import styled from 'styled-components';
import media from '../media';


const Container = styled.div`
    width: 100%; 
    height: 70vh;
    display: flex;
    overflow: hidden;
    position: relative;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.6)) ,url("./assets/banner3.png");
`;
const InfoContainer = styled.div`
    padding: 50px 210px;
    display: flex;
    color: #faf9f6;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${media.desktop`
        padding: 50px 120px;
    `}
    ${media.tablet`
        padding: 50px 70px;
    `}
    ${media.mobile`
        padding: 50px 50px;
    `}
`;

const Title = styled.h1`
    font-size: 60px;
    ${media.desktop`
        font-size: 50px;
    `}
    ${media.tablet`
        font-size: 35px;
    `}
`;

const Desc = styled.p`
    margin: 20px 0px;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 1px;
    text-align: center;
    ${media.mobile`
        font-size: 18px;
    `}
`;


const Slider = () => {


    return (
        <Container>



            <InfoContainer>
                <Title>Entreprenual Induction</Title>
                <Desc>Sheboss strives to create alternative
                    livelihoods for women and girls living
                    in underserved communities through promoting
                    inclusion and sustainable economic growth.
                </Desc>
            </InfoContainer>




        </Container>
    )
}

export default Slider