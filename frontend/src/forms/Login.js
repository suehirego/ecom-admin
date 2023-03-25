import React, { useState } from 'react';
import styled from 'styled-components';
import { FaRegCopyright } from 'react-icons/fa';
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import media from '../media';

const Container = styled.div`
      width: 100vw;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      background-image: linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)) ,url("./assets/banner3.png");
      background-size: cover;
`;
const Logo = styled.h1`
      font-size: 48px;
      font-weight: 600;
      letter-spacing: -3px;
      margin-bottom: 10px;
      color: #f10088;
      display: flex;
      align-items: center;
      justify-content: center;
`;
const Wrapper = styled.div`
      margin-top: 120px;
      padding: 20px;
      width: 30%;
      background-color: white;
      margin-bottom: 10px;
      ${media.desktop`
      width: 50%;
      `}
`;
const Form = styled.form`
      display: flex;
      flex-direction: column;
`;
const Input = styled.input`
      flex: 1; 
      min-width: 40%;
      margin: 10px 10px 0px 0px;
      padding: 12px;
      font-size: 15px;
      border: 1px solid lightgray;
      border-radius: 5px;
`;
const Button = styled.button`
      width: 100%;
      padding: 12px 20px;
      margin: 20px 12px 0px 0px;
      font-size: 18px;
      border: none;
      color: white;
      background-color: teal;
      cursor: pointer;
      border-radius: 5px;
      &:disabled {
            color: green;
            cursor: not-allowed;
      }
`;
const Register = styled.div`
      margin: 10px 0px;
      font-size: 13px;
      font-weight: 400;
      cursor: pointer;
      color: #f10088;
`;
const NewAcc = styled.form`
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      font-weight: 300;
      margin: 10px;
      gap: 20px;
`;
const FormFooter = styled.div`
     width: 30%;
     display: flex;
     align-items: center;
     justify-content: center;
     gap: 5px;
     padding: 20px;
     color: black;
     font-size: 13px;
     font-weight: 300;
     color: gray;
     border-top: 0.6px solid lightgray;
     ${media.desktop`
      width: 50%;
      gap: 5px;
      `}
`;


const Login = () => {

      //API CALLS
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const dispatch = useDispatch();
      const { isFetching } = useSelector((state) => state.user);

      const handleClick = (e) => {
            e.preventDefault();
            login(dispatch, { email, password });
      };

      return (
            <Container>

                  <Wrapper>
                        <Logo>sheboss</Logo>
                        <Form>
            
                              <Input
                                    type="text"
                                    placeholder="Email"
                                    onChange={(e) => setEmail(e.target.value)}
                              />
                              <Input
                                    placeholder="Password"
                                    type="password"
                                    onChange={(e) => setPassword(e.target.value)}
                              />

                              <Button onClick={handleClick} disabled={isFetching}>SIGN IN</Button>
                              

                              <Link to="/register" style={{ textDecoration: 'none', color: '#191919' }}>
                                    <NewAcc>
                                          Do not have an account?
                                          <Register>Register</Register>
                                    </NewAcc>
                              </Link>

                        </Form>
                  </Wrapper>

                  <FormFooter>
                        <FaRegCopyright />
                        <p>2022</p>
                        <p>SHEBOSS LIMITED.</p>
                        <p>All rights reserved.</p>
                  </FormFooter>

            </Container>
      )
}

export default Login


