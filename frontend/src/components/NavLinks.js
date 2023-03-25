import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import media from '../media';
import { navItems } from "../data";



function blinkingEffect() {
    return keyframes`
        50% {
            opacity: 0.6;
                color: pink;
        }
    `;
}

const Container = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    background-color: white;
    gap: 50px;
    border-bottom: 1px solid lightgray;
    padding: 0px 60px;
    ${media.desktop`
        padding: 0px 10px;
    `}
    ${media.tablet`
        padding: 0px 10px;
        display: none;
    `}
    ${media.mobile`
        height: 35px;
        padding: 0px 10px;
    `}
`;
const NavCategories = styled.div`
    display: flex;
    align-items: center;
    flex: 3;
    gap: 50px;
    ${media.tablet`
        gap: 30px;
    `}
    ${media.mobile`
        gap: 10px;
        width:100%;
        font-size: 12px;
    `}
`;

const Category = styled(Link)`
      flex: 1.5;
      height: 50px;
      color: #282828;
      font-size: 14px;
      font-weight: 400;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      ${media.tablet`
            margin-left: 20px;
            font-size: 13px;
      `}
      ${media.mobile`
            font-size: 12px;
            flex: 0.5;
      `}
`;

const DeliveryOffer = styled.div`
      flex:1;
      display: flex;
      align-items: center;
      justify-content: right;
      color: #AB52C5;
      font-size: 14px;
      animation: ${blinkingEffect} 1s linear infinite;
      ${media.tablet`
            display: none;
      `}
    ${media.mobile`
        display: none;
    `}
`;



const NavLinks = () => {

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }


    return (
        <Container>

            <NavCategories>

                {navItems.map((item) => (
                    <Category item={item} key={item.id} to={`/products/${item.cat}`} onClick={scrollToTop}>
                        {item.title}
                    </Category>
                ))}

            </NavCategories>

            <DeliveryOffer>Free delivery for first 100 orders* </DeliveryOffer>

        </Container>
    )
}

export default NavLinks