import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import FooterCom from '../components/FooterCom';
import Newsletter from '../components/Newsletter';
import Navbar from '../components/Navbar';
import NavLinks from '../components/NavLinks';
import media from '../media';
import Products from '../components/Products';



const Container = styled.div`
`;
const TopNav = styled.div`
    top: 0;
    position: sticky;
    z-index: 999;
`;
const RouteBar = styled.div`
    display: flex;
    padding: 10px 40px;
    font-size: 14px;
    font-weight: 300;
    color: gray;
    ${media.mobile`
        padding: 10px 10px;
        font-size: 12px;
    `}
`;
const Title = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    font-weight: 500;
    padding: 15px;
    width: 100%;
    background-color: #f5f6f7;
    border: 1px solid lightgray;
    ${media.mobile`
        padding: 10px 10px;
        font-size: 16px;
    `}
`;
const Header = styled.div`
    display: flex;
    padding: 10px 40px;
    ${media.mobile`
        flex-direction: column; 
        padding: 5px 10px;
    `}
`;
const ProductContainer = styled.div`
    display: flex;
    gap: 3px;
    padding: 10px 40px;
    ${media.mobile`
        flex-direction: column; 
        padding: 10px 0px;
    `}
`;
const SelectText = styled.div`
    display: flex;
    font-size: 14px; 
    margin-top: -20px;
    ${media.mobile`
        font-size: 13px; 
    `}
`;
const SelectContainer = styled.div`
    display: flex;
    gap: 10px;
`;
const MobileFilter = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    ${media.mobile`
        display: flex;
        align-items: center;
        gap: 10px;
        color: gray;
        margin-bottom: -10px;
        background-color: #f2f3f5;
    `}
`;
const ProductContainerRight = styled.div`
    flex:8;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: #f2f3f5;
    padding: 0px 10px;
    position: relative;
`;

const PdtDetails = styled.div`
    width: 98%;
    display: flex;
    align-items: center;
    position: absolute;
    margin-top: 10px;
    padding: 0px 10px;
    justify-content: space-between;
`;
const SortWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    font-size: 14px; 
    margin-left: -30px;
    ${media.mobile`
        font-size: 13px; 
    `}
`;
const Select1 = styled.select`
    padding: 10px;
    width: 180px;
    color: gray;
    font-size: 13px;
    border: 1px solid lightgray;
    -webkit-appearance: none;  
    -moz-appearance: none; 
    appearance: none;
    -webkit-border-radius:0; 
    border-radius:0; 
    -webkit-appearance: listbox !important;
    ${media.mobile`
        width: 120px;
    `}
`;
const Select = styled.select`
    padding: 10px;
    width: 100%;
    font-size: 13px;
    color: gray;
    border: 1px solid lightgray;
    margin-bottom: 20px;
    -webkit-appearance: none;  
    -moz-appearance: none; 
    appearance: none;
    -webkit-appearance: listbox !important
    ${media.mobile`
        width: 60%;
    `}
      
`;
const Option = styled.option`
    font-size: 20px;
    font-weight: 300;
`;


const ProductList = () => {

    //spliting categories
    const location = useLocation();
    const cat = location.pathname.split("/")[2];

    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");


    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });

    };

    return (
        <Container>

            <TopNav>
                <Announcement />
                <Navbar />
                <NavLinks />
            </TopNav>

            <RouteBar>
                Home / ViewAll
            </RouteBar>

            <Header>
                <Title>{cat}</Title>
            </Header>

            <ProductContainer>

                <ProductContainerRight>

                    <PdtDetails>


                        <MobileFilter>

                            <SelectText>Search by:</SelectText>

                            <SelectContainer>

                                <Select name="color" onChange={handleFilters}>

                                    <Option>
                                        Color
                                    </Option>
                                    <Option>Black</Option>
                                    <Option>White</Option>
                                    <Option>Red</Option>
                                    <Option>Blue</Option>
                                    <Option>Pink</Option>
                                    <Option>Green</Option>
                                    <Option>Mustard</Option>

                                </Select>

                                <Select name="size" onChange={handleFilters}>

                                    <Option>
                                        Size
                                    </Option>
                                    <Option>XS</Option>
                                    <Option>S</Option>
                                    <Option>M</Option>
                                    <Option>L</Option>
                                    <Option>XL</Option>
                                    <Option>XXL</Option>
                                    <Option>FREE SIZE</Option>

                                </Select>

                            </SelectContainer>

                        </MobileFilter>

                        <SortWrapper>
                            Sort by:
                            <Select1 onChange={(e) => setSort(e.target.value)}>
                                <Option value="newest">New Arrivals</Option>
                                <Option value="sale">Sale</Option>
                                <Option value="asc">Price - Low to High</Option>
                                <Option value="desc">Price - High to Low</Option>
                            </Select1>
                        </SortWrapper>

                    </PdtDetails>

                    <Products cat={cat} filters={filters} sort={sort} />

                </ProductContainerRight>

            </ProductContainer>

            <Newsletter />
            <FooterCom />

        </Container>
    )
}

export default ProductList