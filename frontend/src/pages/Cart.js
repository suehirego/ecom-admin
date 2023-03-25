import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import FooterCom from '../components/FooterCom';
import Navbar from '../components/Navbar';
import NavLinks from '../components/NavLinks';
import Newsletter from '../components/Newsletter';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import media from '../media';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { removeItem } from '../redux/cartRedux';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const TopNav = styled.div`
    top: 0;
    position: sticky;
    z-index: 999;
    width:100%;
`;
const Wrapper = styled.div`
      padding: 20px 60px;
      width:100%;
      ${media.desktop`
            padding: 20px 10px;
      `}
      ${media.tablet`
            width:100%;
            padding: 20px 10px;
      `}
      ${media.mobile`
            width:100%;
            padding: 20px 10px;
      `}
`;
const Title = styled.p`
    font-size: 30px;
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    ${media.tablet`
        font-size: 20px;
        margin-bottom: 20px;
        justify-content: center;
    `}
    ${media.mobile`
        font-size: 20px;
        margin-bottom: 20px;
        justify-content: center;
    `}
`;
const Bottom = styled.div`
    display: flex; 
    justify-content: space-between;
    gap: 20px;
    ${media.desktop`
        gap: 5px;
    `}
    ${media.tablet`
        gap: 5px;
        flex-direction: column;
    `}
    ${media.mobile`
        gap: 5px;
        flex-direction: column;
    `}
`;
const Info = styled.div`
    flex: 3;
`;
const ProductHeading = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    font-weight: 300;
    background-color: #ebecf0;
    ${media.mobile`
        display: none;
    `}
`;
const PdtTitle = styled.div`
    flex:3;
    display: flex;
    padding: 10px;
    padding: 20px 10px;
    border: 0.5px solid lightgray;
`;
const PdtEdit = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.5px solid lightgray;
`;
const PdtPrice = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.5px solid lightgray;
`;
const ProductItem = styled.div`
    display: flex;
    flex-direction: column;
`;
const Product = styled.div`
    display: flex;
    justify-content: space-between;
`;
const ProductDetail = styled.div`
    flex:3;
    display: flex;
    padding: 10px;
    border: 0.5px solid lightgray;
    ${media.mobile`
        padding: 3px;
    `}
`;
const Image = styled.img`
    width: 150px;  
    height: 180px;
    ${media.mobile`
        width: 100px;
        height: 120px;
    `}
`;
const Details = styled.div`
    padding: 5px 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-size: 13px;
    font-weight: 300; 
    ${media.mobile`
        padding: 3px 5px;
        gap: 5px;
        font-size: 12px;
        display: inline-block;
        width: 120px;
        white-space: nowrap;
        overflow: hidden !important;
        text-overflow: ellipsis;
    `} 
`;
const ProductName = styled.span`
    font-size: 15px;
    font-weight: 400;  
    ${media.mobile`
        font-size: 12px;
    `} 
`;
const ProductId = styled.span`
    display: flex;
    gap: 8px;  
    font-weight: 300; 
    ${media.mobile`
        display: none;
    `}   
`;
const ProductSize = styled.span`
      display: flex;
      gap: 8px; 
      font-weight: 300;
`;
const ProductColor = styled.div`
      display: flex;
      gap: 8px;
      font-weight: 300;
`;
const ProductBrand = styled.div`
      display: flex;
      gap: 8px;
      font-weight: 300;
`;
const P = styled.p`
      font-size: 13px;
      font-weight: 400; 
      ${media.mobile`
            display: none;
      `}
`;
const QuantityDetail = styled.div`
      flex:1;
      display: flex;
      justify-content: center;
      border: 0.5px solid lightgray;
      ${media.mobile`
            padding: 0px 10px;
      `}
`;
const PriceDetail = styled.div`
      flex:1;
      display: flex;
      justify-content: center;
      border: 0.5px solid lightgray;
      ${media.mobile`
            display: none;
      `}
`;
const ProductQttyContainer = styled.div`
      display: flex; 
      flex-direction: column; 
      align-items: center;
      margin-top: 20px;
      gap: 20px;
      ${media.mobile`
            gap: 10px;
            margin-top: 15px;
      `}
`;
const PdtQuantity = styled.div`
      font-size: 18px;
      display: flex;
      gap: 10px;
      align-items: center;
      justify-content: center;
      ${media.mobile`
            gap: 5px;
      `}
`;
const PdtQuantityNum = styled.div`
      font-size: 15px;
      font-Weight: 300;
      padding: 5px;
      width: 40px;
      display: flex;
      justify-content: center;
      color: teal;
`;
const PdtPriceBtn = styled.h4`
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      font-weight: 300;
      ${media.mobile`
            font-weight: 400;
            font-size: 14px;
      `}
`;
const PdtDeleteButton = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: 300;
      gap: 10px;
      width: 100px;
      padding: 8px;
      cursor: pointer;
      border-radius: 5px;
      color:red;
      border: 0.5px solid black;
      ${media.mobile`
            width: 70px;
            font-size: 10px;
            padding-right: 8px;
      `}
`;
const ProductAmtContainer = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 80px;
      gap: 20px;
`;

const PdtOldAmount = styled.p`
      font-size: 16px;
      font-Weight: 400;
`;

const MobileTotal = styled.div`
      display: none;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 15px 3px;
      margin-top: 5px;
      margin-bottom: 20px;
      border-top: 1px solid lightgray;
      border-bottom: 1px solid lightgray;
      ${media.widescreen`
            display: none;
     `}
      ${media.desktop`
            // background: red;
            display: none;
     `}
      ${media.tablet`
            // background: blue;
            display: none;
      `}
      ${media.mobile`
            // background: blue;
            display: flex;
      `}
`;
const TotalTitle = styled.div`
`;

//SUMMARY
const Summary = styled.div`
      flex:1;
      height: 80vh;
      padding: 20px;
      border: 0.5px solid lightgray;
      ${media.mobile`
            // display: none;
      `}
`;
const SummaryTitle = styled.h2`
      font-weight: 400;
      text-align: center;
      ${media.desktop`
            font-size: 18px;
      `}
      ${media.tablet`
            font-size: 20px;
      `}
      ${media.mobile`
            font-size: 20px;
      `}
`;
const SummaryItem = styled.div`
      margin: 30px 0px; 
      display: flex; 
      justify-content: space-between;
      text-align: ${(props) => props.type === "subItem" && "right"};
      font-size: ${(props) => props.type === "total" ? "18px" : "15px"};
      font-weight: ${(props) => props.type === "total" ? 400 : 300};
      ${media.desktop`
            font-size: ${(props) => props.type === "total" ? "16px" : "14px"};
      `}
`;
const SummaryItemText = styled.span`
`;
const SummaryItemPrice = styled.span`
`;
const SummaryButton = styled.button`
      padding: 15px;
      width: 100%;
      font-size: 14px;
      font-weight: 400;
      margin-top: 10px;
      cursor: pointer;
      border-radius: 5px;
      border: none;
      background-color: green;
      color: white;
`;
const PaymentIcons = styled.div`
     display: flex;
     gap: 12px;
     margin-top: 60px;
     flex-direction: column;
`;
const PaymentTitle = styled.h3`
      font-weight: 300;
      ${media.mobile`
            font-size: 15px;
      `}
`;
const PaymentIconsDiv = styled.div`
     display: flex;
     gap: 20px;
     margin-bottom: 10px;
`;
const Img1 = styled.img`
      width: 38px;
      height: 30px;
      ${media.tablet`
            width: 42px;
            height: 35px;
      `}
`;
const Img2 = styled.img`
      width: 38px;
      height: 30px;
      ${media.tablet`
            width: 48px;
            height: 32px;
      `}   
`;


const Cart = () => {

    const cart = useSelector((state) => state.cart);
    const products = useSelector((state) => state.cart.products)
    const user = useSelector((state) => state.user.currentUser);
    const dispatch = useDispatch();

    // shipping cost & discount
    const shippingCost = 15000;

    const subTotal = () => {
        let total = 0;
        products.forEach((item) => {
            total += item.quantity * item.price;
        });
        return total.toLocaleString(undefined, { minimumFractionDigits: 2 })
    };

    // const totalPrice = subTotal + shippingCost 
    const totalPrice = () => {
        let price = 0 + shippingCost;
        products.forEach((item) => {
            price += item.quantity * item.price;
        });
        return price.toLocaleString(undefined, { minimumFractionDigits: 2 });
    };


    //flutterwave payment gateway
    const config = {
        public_key: 'FLWPUBK-5dffbb25ec99d279c5d79619e95ce5d5-X',
        tx_ref: Date.now(),
        amount: cart.total,
        currency: 'UGX',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
            email: user.details.email,
        },
        customizations: {
            title: 'Sheboss',
            description: 'Payment for items at Sheboss',
        },
    };

    const handleFlutterPayment = useFlutterwave(config);


    return (
        <Container>
            <TopNav>
                <Announcement />
                <Navbar />
                <NavLinks />
            </TopNav>


            <Wrapper>
                <Title>YOUR BAG</Title>

                <Bottom>

                    <Info>
                        <ProductHeading>
                            <PdtTitle>PRODUCT</PdtTitle>
                            <PdtEdit>QUANTITY</PdtEdit>
                            <PdtPrice>TOTAL</PdtPrice>
                        </ProductHeading>

                        {products?.map((product) => (

                            <ProductItem>
                                <Product>

                                    <ProductDetail>
                                        <Image src={product.img} />
                                        <Details>
                                            <ProductName>{product.desc}</ProductName>
                                            <ProductId>
                                                <P>ID:</P>
                                                SB-P000{product.id}
                                            </ProductId>
                                            <ProductSize>
                                                <P>Size:</P>
                                                {product.size}
                                            </ProductSize>
                                            <ProductColor>
                                                <P>Color:</P>
                                                {product.color}
                                            </ProductColor>
                                            <ProductBrand>
                                                <P>Brand:</P>
                                                {product.brand}
                                            </ProductBrand>
                                        </Details>
                                    </ProductDetail>

                                    <QuantityDetail>
                                        <ProductQttyContainer>

                                            <PdtPriceBtn>
                                                UGX: {product.price?.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
                                            </PdtPriceBtn>

                                            <PdtQuantity>
                                                <PdtQuantityNum>X {product.quantity}</PdtQuantityNum>
                                            </PdtQuantity>

                                            <PdtDeleteButton onClick={() => dispatch(removeItem(product._id))}>
                                                <RiDeleteBin6Line />
                                                Remove
                                            </PdtDeleteButton>

                                        </ProductQttyContainer>
                                    </QuantityDetail>

                                    <PriceDetail>
                                        <ProductAmtContainer>
                                            <PdtOldAmount>UGX: {(product.price * product.quantity)?.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</PdtOldAmount>
                                        </ProductAmtContainer>
                                    </PriceDetail>


                                </Product>

                                <MobileTotal>
                                    <TotalTitle>Subtotal</TotalTitle>
                                    <PdtOldAmount>UGX: {(product.price * product.quantity)?.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</PdtOldAmount>
                                </MobileTotal>


                            </ProductItem>
                        ))}
                    </Info>

                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>

                        <SummaryItem type="subItem">
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>UGX: {subTotal()}</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem type="subItem">
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>{shippingCost.toLocaleString(undefined, { minimumFractionDigits: 2 })}</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem type="subItem">
                            <SummaryItemText>Product Discount</SummaryItemText>
                            <SummaryItemPrice>0.00</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem type="total">
                            <SummaryItemText>Total Amount</SummaryItemText>
                            <SummaryItemPrice>UGX: {totalPrice()}</SummaryItemPrice>
                        </SummaryItem>

                        {user
                            ?
                            <SummaryButton
                                onClick={() => {
                                    handleFlutterPayment({
                                        callback: (response) => {
                                            console.log(response);
                                            closePaymentModal() // this will close the modal programmatically
                                        },
                                        onClose: () => { },
                                    });
                                }}
                            >
                                PROCEED TO CHECKOUT
                            </SummaryButton>
                            :
                            <Link to="/cartlogin">
                                <SummaryButton>
                                    PROCEED TO CHECKOUT
                                </SummaryButton>
                            </Link>


                        }

                        <PaymentIcons>
                            <PaymentTitle>WE ACCEPT:</PaymentTitle>
                            <PaymentIconsDiv>

                                <Img1
                                    src={process.env.PUBLIC_URL + '/visa.png'}
                                    alt=""
                                />
                                <Img1
                                    src={process.env.PUBLIC_URL + '/mastercard.png'}
                                    alt=""
                                />
                                <Img1
                                    src={process.env.PUBLIC_URL + '/mtn.png'}
                                    alt=""
                                />
                                <Img2
                                    src={process.env.PUBLIC_URL + '/airtel.png'}
                                    alt=""
                                />

                            </PaymentIconsDiv>

                        </PaymentIcons>

                    </Summary>

                </Bottom>
            </Wrapper>



            <Newsletter />
            <FooterCom />

        </Container>
    )
}

export default Cart


