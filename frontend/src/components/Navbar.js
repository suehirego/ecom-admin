import React, { useState } from 'react';
import '../App.css';
import styled from 'styled-components';
import { IoIosSearch } from 'react-icons/io';
import { BsCart3 } from 'react-icons/bs';
import { Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/userRedux";
import media from '../media';
import { useHistory } from "react-router";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { MdLogout, MdLogin } from "react-icons/md";
import { navItems } from '../data';
import logo2 from '../assets/logo2.png';



const Container = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    background-color: white;
    gap: 20px;
    border-bottom: 1px solid lightgray;
    color: #000000;
    padding: 10px 10px;
    ${media.desktop`
            padding: 0px 10px;
            /* background-color: green; */
      `}
    ${media.tablet`
        display: flex;
        padding: 10px 10px;
        /* background-color: orange; */
    `}
    ${media.mobile`
        display: flex;
        padding: 10px 10px;
        /* background-color: blue; */
    `}
`;

//left
const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
      
`;
const Logo = styled.img`
    width: 85px; 
    display: flex;
    align-items: center;
    margin-top: -10px;

    ${media.tablet`
        width: 90px;
        display: none;
    `}
    ${media.mobile`
        margin-left: -5px;
        font-size: 11px;
        width: 90px;
    `}
`;

//center
const Center = styled.div`
    flex:4;  
    display: flex;
    align-items: center;
    justify-content: center;
    ${media.tablet`
        flex: 2.5
    `}
`;
const SearchContainer = styled.div`
    border:  0.5px solid teal;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-left: 10px;
    background-color: white;
    border-radius: 5px;
    ${media.tablet`
        display: none;
    `}
    ${media.mobile`
        display: none;
    `}
`;
const Input = styled.input`
    border: none;
    font-size: 13px;
    color: #282828;
    &:focus {
        outline: none
    }
    &:active {
        outline: none;
    }
`;
const SearchIcon = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    height: 100%;
    font-size: 16px;
    color: #fbfbfd;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 10px;
    background-color: teal;
`;

//right
const Right = styled.div`
    flex:2.5; 
    display: flex;
    gap:10px;
    align-items: center;
    justify-content: flex-end;
    ${media.tablet`
        flex: 4;
    `}
    ${media.mobile`
        margin-left: -10px;
        font-size: 11px;
    `}
`;
const Heading = styled.div`
    font-size: 13px; 
    ${media.mobile`
        font-size: 11px; 
    `}
`;
const Desc = styled.div`
    font-size: 17px; 
    font-weight: 500;
    ${media.mobile`
        font-size: 15px; 
    `}
`;
const MenuItem = styled.div`
    font-size: 13px;
    cursor: pointer;
    margin-left: 25px;
    ${media.tablet`
        margin-left: 35px;
        display: none;
    `}
    ${media.mobile`
        margin-left: 20px;
        font-size: 11px;
    `}
`;
const MenuItem2 = styled.div`
    font-size: 13px;
    cursor: pointer;
    margin-left: 25px;
    background-color: #f10088;
    color: white;
    padding: 10px;
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 3px;
    ${media.tablet`
        display: none;
    `}
`;
const MenuItem3 = styled.div`
    font-size: 13px;
    cursor: pointer;
    margin-left: 25px;
    background-color: teal;
    color: white;
    padding: 10px;
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 3px;
    ${media.tablet`
        display: none;
    `}
`;
const Cart = styled.div`
    font-size: 13px;
    cursor: pointer;
    margin-left: 25px;
    ${media.tablet`
        margin-right: 35px;
    `}
`;

// SIDE BAR
const MenuIcon = styled.button`
    display: none;
    ${media.tablet`
    margin-left: -60px;
    display: block;
    align-items: center;
    font-size: 1.8rem;
    background: none;
    color: purple;
    cursor: pointer;
    border: none;
        
    `}
`
const SidebarLinkContainer = styled.div`
   position: fixed;
    z-index: 2;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    top: 0;
    left: 0;
    padding-top: 20px;
    transition: 0.3s ease-in-out;
    background-color: teal;

`;
const SidebarContainer = styled.div`
    
`
const SideBarUL = styled.ul`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
`
const MobileLogo = styled(Link)`
    cursor: pointer;
    display: flex;
    margin-bottom: 10px;
    margin-left: 8px;
    align-items: center;
    justify-content: flex-start;
`;
const LogoImg = styled.img`
    width: 80px; 
   
`;
const SidebarLink = styled(Link)`
  display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 8px 0px 8px 16px;
    list-style: none;
    text-decoration: none;
    height: 60px;
    width: 60%;
    cursor: pointer;
    color: white;
    font-size: 14px;
    &:hover{
        color: green;
        background-color: aqua;

    }
`;
const MobileLogout = styled(Link)`
    gap: 10px;
    margin-left: 15px;
    display: flex;
    height: 40px;
    width: 60%;
    bottom: 40px;
    cursor: pointer;
    position: absolute;
    color: white;
    font-size: 14px;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    background-color: #e44650;
`;
const MobileLogin = styled(Link)`
    gap: 10px;
    margin-left: 15px;
    display: flex;
    height: 40px;
    width: 60%;
    bottom: 40px;
    position: absolute;
    cursor: pointer;
    color: green;
    font-size: 14px;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    background-color: aqua;
    
`;





const Navbar = () => {

    // const quantity = useSelector((state) => state.cart.quantity);

    const products = useSelector((state) => state.cart.products);
    const user = useSelector((state) => state.user.currentUser);

    const dispatch = useDispatch();
    const history = useHistory();

    const [sidebar, setSidebar] = useState(false);
    const closeSidebar = () => setSidebar(!sidebar);

    const handleLogout = () => {
        dispatch(logoutUser(user))
        history.push("/");
    }

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    return (

        <Container>

            <Left>
                <Link to="/" className='linkLogo'>
                    <Logo src={process.env.PUBLIC_URL + '/logo2.png'} alt="" />
                </Link>
            </Left>

            <MenuIcon
                onClick={() => {
                    setSidebar((curr) => !curr);
                }}
            >
                <FaIcons.FaBars />
            </MenuIcon>

            <Center>
                <SearchContainer>
                    <Input placeholder="Search for Products..." />
                    <SearchIcon>
                        <IoIosSearch />
                    </SearchIcon>
                </SearchContainer>
            </Center>

            <Right>

                <Link to="/login" style={{ color: "#191919", textDecoration: "none", cursor: "pointer" }}>
                    <MenuItem>
                        <p style={{ fontSize: 13 }}>Hi, {user ? user.details.firstname : "Sign in"}</p>
                        <p style={{ fontSize: 16, fontWeight: 500 }}>Account</p>
                    </MenuItem>
                </Link>


                <Link to="/login" style={{ color: "#191919", textDecoration: "none", cursor: "pointer" }}>
                    <MenuItem>
                        <Heading style={{ fontSize: 12 }}>Returns&</Heading>
                        <Desc>Orders</Desc>
                    </MenuItem>
                </Link>

                <Link to="/cart" style={{ color: "#191919", textDecoration: 'none' }}>
                    <Cart>
                        <Badge
                            badgeContent={products.length} color="secondary"
                            style={{ marginLeft: 25, marginTop: 5, position: 'absolute' }}
                            sx={{
                                "& .MuiBadge-badge": {
                                    color: "#FBFBFD",
                                    backgroundColor: "teal"
                                }
                            }}
                        >
                        </Badge>
                        <BsCart3 style={{ fontSize: 28 }} />
                    </Cart>
                </Link>


                {user ?
                    <MenuItem2 onClick={handleLogout}>
                        <p style={{ fontSize: 13 }}>Log Out</p>
                    </MenuItem2>
                    :

                    <Link to="/login" style={{ color: "#191919", textDecoration: 'none' }}>
                        <MenuItem3>
                            <p style={{ fontSize: 13 }}>Login</p>
                        </MenuItem3>
                    </Link>
                }


            </Right>

            {sidebar &&
                <SidebarLinkContainer>
                    <SideBarUL>

                        <MenuIcon
                            onClick={() => {
                                setSidebar((curr) => !curr);
                            }}
                        >
                            <AiIcons.AiOutlineClose style={{ color: 'white', marginLeft: '200px' }} />
                        </MenuIcon>


                        <MobileLogo to="/" className='linkLogo'>
                            <LogoImg src={logo2} alt="" />
                        </MobileLogo>

                        <p
                            style={{
                                color: 'aqua',
                                marginLeft: '20px',
                                marginBottom: '30px',
                                fontSize: '16px'
                            }}
                        >
                            Hi, {user ? user.details.firstname : "Signin"}
                        </p>


                        <SidebarContainer onClick={scrollToTop}>
                            {navItems.map((item, index) => (
                                <SidebarLink index={index} key={item.id} to={`/products/${item.cat}`} onClick={closeSidebar} on>
                                    {item.title}
                                </SidebarLink>
                            ))}
                        </SidebarContainer>


                        {user ?
                            <MobileLogout onClick={handleLogout}>
                                <MdLogout />
                                LOGOUT
                            </MobileLogout>
                            :

                            <MobileLogin to="/login">
                                <MdLogin />
                                LOGIN
                            </MobileLogin>

                        }

                    </SideBarUL>

                </SidebarLinkContainer>
            }

        </Container>
    )
}

export default Navbar