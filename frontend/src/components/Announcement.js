import React from 'react';
import styled from 'styled-components';
import { MdArrowForwardIos } from 'react-icons/md';
import media from '../media';

const Container = styled.div`
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: #ddebe3;
    ${media.tablet`
        display: none;
    `}
`;
const AnnWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #AB52C5;
    font-size: 13px;
    padding: 3px 10px;
    gap:10px;
    ${media.desktop`
        font-size: 11px;
    `}
`;
const Left = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 14px;
    ${media.desktop`
        font-size: 11.5px;
    `}
`;
const Center = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
`;



const Announcement = () => {


    return (
        <Container>

            <AnnWrapper>
                <Left>
                    <p>Holiday Deals! Free Shipping on Orders Over UGX50,000</p>
                </Left>

                <Center>
                    <MdArrowForwardIos style={{ fontSize: 20 }} />
                </Center>

                <Right>
                    <p>30% off</p>
                    <p>everything</p>
                </Right>

            </AnnWrapper>



        </Container>
    )
}

export default Announcement