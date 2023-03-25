import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import FooterCom from '../components/FooterCom';
import Navbar from '../components/Navbar';
import NavLinks from '../components/NavLinks';
import Newsletter from '../components/Newsletter';
import { FaShippingFast } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import { publicRequest } from '../requestMethod';
import { addToCart } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { FaPlusSquare, FaMinusSquare } from 'react-icons/fa';
import media from '../media';



const Container = styled.div`
`;
const TopNav = styled.div`
      top: 0;
      position: sticky;
      z-index: 999;
`;
const Wrapper = styled.div`
      padding: 20px 80px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #f5f6f7;
      ${media.mobile`
            padding: 20px 0px;
      `}
`;
const RouteBar = styled.div`
      display: flex;
      font-size: 12px;
      font-weight: 300;
      color: gray;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 3px;
`;
const SingleProductWrapper = styled.div`
      display: flex;
      width: 80%;
      ${media.mobile`
      width: 100%;
            flex-direction: column;
      `}
`;
const ImgContainer = styled.div`
      flex: 2;
      ${media.mobile`
            flex: 1;
            width: 100%;
            padding: 20px 20px;
      `}
`;
const Image = styled.img`
      width: 100%;
      height: 92vh;
      object-fit: cover;
      ${media.mobile`
            height: 50vh;
      `}
`;
const InfoContainer = styled.div`
      flex: 1.5;
      padding: 20px 10px;
      ${media.mobile`
            flex: 1;
            padding: 0px 20px;
      `}
`;
const Title = styled.p`
      font-weight: 400;
`;
const Desc = styled.p`
      color: gray;
      margin: 5px 0px;
`;
const Price = styled.h2`
      font-size: 25px;
      margin-bottom: 15px;
      ${media.mobile`
            font-size: 20px;
      `}
`;
const FilterContainer = styled.div`
      display: flex;
      width: 80%;
      flex-direction: column;
      margin-top: 30px;
`;
const Filter = styled.div`
      display: flex;
      flex-wrap: wrap;
      margin-top: 18px;
`;
const FilterTitle = styled.span`
      font-size: 16px;
      font-weight: 400;
`;
const FilterColor = styled.div`
      display: block;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background-color: ${(props) => props.color};
      margin: 0px 5px;
      cursor: pointer;
      &:hover{
            border: 1px solid black;
      background-clip: content-box;
      padding: 2px;
      }
      &:active{
            border: 1px solid black;
            background-clip: content-box;
            padding: 2px;
      }
`;
const FilterSize = styled.button`
      width: 75px;
      height: 35px;
      margin: 5px 5px;
      border: none;
      border-radius: 15px;
      font-size: 12px;
      background-color: #fbfbfd;
      border: 1px solid lightgray;
      margin-top: -3px;
      &:hover{
            border: 1px solid black;
      }
      &:active{
            border: 2px solid black;
      }
`;
const AddContainer = styled.div`
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 24px;
      margin-top: 18px;
      padding: 0px 3px;
      ${media.mobile`
            padding: 0px 95px 0px 0px;
      `}
`;
const AmountContainer = styled.div`
      display: flex;
      align-items: center;
      font-weight: 300;
`;
const Amount = styled.span`
      width: 30px;
      height: 30px;
      border-radius: 10px;
      border: 1px solid lightgray;
      display: flex;
      font-size: 16px;
      align-items: center;
      justify-content: center;
      margin: 0px 5px;
`;
const Button = styled.button`
      padding: 12px 10px;
      background-color: black;
      color: #ffffff;
      border-radius: 10px;
      width: 110px;
      border: none;
      font-size: 15px;  
      cursor: pointer; 
`;
const Extras = styled.div`
     display: flex;
     flex-direction: column;
     margin: 30px 10px;
     padding: 20px;
     font-size: 14px;
     background-color: #ebecf0;
`;
const ExtrasDiv = styled.div`
     display: flex;
     gap: 8px;
     margin-bottom: 10px;
`;
const ExtrasDiv2 = styled.div`
     display: flex;
     gap: 8px;
     flex-direction: column;
`;
const SubTitle = styled.div`
     color: gray;
`;


const SingleProduct = () => {

    //fetching single product
    const location = useLocation();
    const id = location.pathname.split("/")[2];

    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const dispatch = useDispatch();


    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get("/products/find/" + id);
                setProduct(res.data);
            } catch (err) { }
        };
        getProduct();

    }, [id]);

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    };

    const handleClick = () => {
        alert("Your Order has been added to cart!")
        dispatch(
            addToCart({ ...product, quantity, color, size })
        );
    };



    return (
        <Container>
            <TopNav>
                <Announcement />
                <Navbar />
                <NavLinks />
            </TopNav>

            <Wrapper>

                <SingleProductWrapper>

                    <ImgContainer>
                        <RouteBar>
                            Home / Shop All / {product.desc}
                        </RouteBar>
                        <Image src={product.img} />
                    </ImgContainer>

                    <InfoContainer>
                        <Title>{product.desc}</Title>
                        <Desc>SB-P000{product.id}</Desc>
                        <Price>UGX: {product.price?.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</Price>

                        <hr style={{ border: '1px dotted lightgray', width: '90%' }} />

                        <FilterContainer>
                            <FilterTitle>Color:</FilterTitle>

                            <Filter>
                                {product.color?.map((c) => (
                                    <FilterColor color={c} key={c} onClick={() => setColor(c)} />
                                ))}
                            </Filter>
                        </FilterContainer>

                        <FilterContainer>

                            <FilterTitle>Size:</FilterTitle>

                            <Filter>
                                {product.size?.map((s) => (
                                    <FilterSize key={s} onClick={() => setSize(s)}>
                                        {s}
                                    </FilterSize>
                                ))}
                            </Filter>

                        </FilterContainer>

                        <AddContainer>
                            <AmountContainer>
                                <FaMinusSquare onClick={() => handleQuantity("dec")} />
                                <Amount>{quantity}</Amount>
                                <FaPlusSquare onClick={() => handleQuantity("inc")} />
                            </AmountContainer>
                            <Button onClick={handleClick} >Add to Cart</Button>
                        </AddContainer>

                        <Extras>
                            <ExtrasDiv>
                                <FaShippingFast style={{ fontSize: '22px', color: 'green' }} />
                                Free Shipping?
                            </ExtrasDiv>
                            <ExtrasDiv2>
                                <SubTitle>Free express shipping on orders over <br></br>UGX: 350,000</SubTitle>
                                <SubTitle>1-2 Business Days</SubTitle>
                            </ExtrasDiv2>
                        </Extras>


                    </InfoContainer>

                </SingleProductWrapper>

            </Wrapper>

            <Newsletter />
            <FooterCom />

        </Container>
    )
}

export default SingleProduct;