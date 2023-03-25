import React from 'react';
import styled from 'styled-components';
import media from '../media';
import { Link } from 'react-router-dom';


const Container = styled.div`
      flex: 1 0 21%;
      margin: 0px 5px 60px 5px;
      height: 250px;
      border: 0.3px solid lightgray;
      ${media.desktop`
            height: 200px;
      `}
      ${media.tablet`
            flex: 1 0 30%;
            height: 150px;
      `}
      ${media.mobile`
            flex: 1 0 40%;
            height: 230px;
            /* margin: 3px 2px 40px 2px;    */
      `}
`;
const Image = styled.img`
      width: 100%;
      height: 100%;
      object-fit: cover;
`;
const Amount = styled.p`
     font-size: 15px;
     font-weight: 500;
     margin-bottom: 8px;
     color: teal;
     ${media.desktop`
          font-size: 11px;   
      `}
      ${media.tablet`
            font-size: 10px;   
      `}
     ${media.mobile`
            font-size: 13px;   
      `}
`;
const Desc = styled.p`
     font-size: 14px;
     font-weight: 300;
     margin-bottom: 5px;
     color: gray;
     ${media.desktop`
          font-size: 11px;   
      `}
     ${media.mobile`
            font-size: 11.5px;   
            margin-bottom: 3px;
      `}
`;


const ProductItem = ({ item }) => {

      const scrollToTop = () => {
            window.scrollTo(0, 0)
      }

      return (
            <Container>
                  <Link style={{textDecoration: "none"}} to={`/product/${item._id}`} onClick={scrollToTop}>
                       <Image src={item.img} />
                        <Desc>{item.desc}</Desc>
                        <Amount>ugx {item.price?.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</Amount>
                  </Link>
            </Container>
      )
}

export default ProductItem