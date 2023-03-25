import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import media from '../media';

const Hover = styled.div`
      opacity: 0;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(0,0,0,0.4);
      z-index: 3;
      display: flex;
      align-items: center;
      justify-content: center;
`;
const Container = styled.div`
      flex: 1 0 16%;
      margin: 10px 1px 50px 1px;
      height: 220px;
      border: 0.4px solid #AB52C5;
      position: relative;
      &:hover ${Hover}{
            opacity: 1;
      }
      ${media.desktop`
            height: 200px;
      `}
      ${media.tablet`  
            flex: 1 0 30%;   
            height: 210px;
      `}
      ${media.mobile`
            flex: 1 0 40%;
            height: 210px;
      `}
`;
const Image = styled.img`
      width: 100%;
      height: 100%;
      object-fit: cover;
`;
const Button = styled(Link)`
      width: 80px;
      height: 30px;
      font-size: 13px;
      border-radius: 3px;
      background-color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      transition: all 0.5s ease;
      cursor: pointer;
      &:hover {
            background-color: #e9f5f5;
            transform: scale(1.1);
      }
`;
const ItemDetails = styled.div`
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
`;
const Price = styled.div`
      border: none;
      margin-top: 0px;
      display: flex;
      align-items: center;
      gap: 20px;
      ${media.desktop`
            gap: 5px;
            margin-bottom: 20px;
            flex-direction: column;
      `}
      ${media.tablet`
            /* gap: 10px; */
      `}
`;
const Amount = styled.p`
     font-size: 13px;
     font-weight: 500;
     margin-bottom: 8px;
     color: #cc0000;
     ${media.desktop`
          font-size: 11px; 
          margin-bottom: 3px;  
      `}
      ${media.tablet`
            font-size: 10px;  
            margin-bottom: 0px;  
      `}
     ${media.mobile`
            font-size: 12px;   
      `}
`;
const OldPrice = styled.p`
     color: gray;
     font-size: 13px;
     font-weight: 300;
     text-decoration: line-through;
     margin-bottom: 8px;
      ${media.desktop`
          font-size: 11px;   
      `}
      ${media.tablet`
            font-size: 10px;   
      `}
     ${media.mobile`
            font-size: 12px;   
      `}
`;
const Desc = styled.p`
     font-size: 12px;
     font-weight: 300;
     margin-bottom: 5px;
     ${media.desktop`
          font-size: 11px;   
      `}
      ${media.tablet`
            font-size: 11px;   
      `}
     ${media.mobile`
            font-size: 12px;   
      `}
`;


const SaleItem = ({ item }) => {

      const scrollToTop = () => {
            window.scrollTo(0, 0)
      }


      return (
            <Container>
                  <Image src={item.img} />
                  <Hover>
                        <Button to={`/product/${item._id}`} onClick={scrollToTop}>Add to Cart</Button>
                  </Hover>

                  <ItemDetails>
                        <Desc>{item.desc}</Desc>

                        <Price>
                              <Amount>ugx{item.newPrice?.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</Amount>
                              <OldPrice>ugx{item.price?.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</OldPrice>
                        </Price>
                  </ItemDetails>

            </Container>
      )
}

export default SaleItem