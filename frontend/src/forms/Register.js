import React from 'react';
import styled from 'styled-components';
import axios from "axios";
import { useRef } from 'react';
import { FaRegCopyright } from 'react-icons/fa';
import { useHistory } from "react-router";
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
      padding: 20px 20px 10px 20px;
      width: 40%;
      background-color: white;
      margin-bottom: 10px;
      ${media.desktop`
      width: 60%;
      `}
     
`;
const Form = styled.form`
      display: flex;
      flex-wrap: wrap;
`;
const Input = styled.input`
      flex: 1; 
      min-width: 40%;
      margin: 20px 10px 0px 0px;
      padding: 10px;
      font-size: 15px;
      border: 1px solid lightgray;
      border-radius: 5px;
`;
const Agreement = styled.span`
      font-size: 11px;
      margin: 13px 0px;
      font-weight: 300;
`;
const Button = styled.button`
      width: 100%;
      padding: 10px 20px;
      margin: 20px 10px 0px 0px;
      font-size: 18px;
      border: none;
      color: white;
      background-color: teal;
      cursor: pointer;
      border-radius: 5px;
`;
const Link = styled.a`
      margin: 10px 0px;
      font-weight: 400;
      cursor: pointer;
      color: #f10088;
`;
const NewAcc= styled.form`
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
      font-weight: 300;
      margin: 10px;
      gap: 20px;
`;
const FormFooter = styled.div`
     width: 40%;
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

const Register = () => {

      const username = useRef();
      const firstname = useRef();
      const lastname = useRef();
      const email = useRef();
      const password = useRef();
      const confirmPassword = useRef();
      const history = useHistory();

      const handleClick = async (e) => {
            e.preventDefault();
            if (confirmPassword.current.value !== password.current.value) {
                  confirmPassword.current.setCustomValidity("Passwords don't match!");
            } else {
                  const user = {
                        username: username.current.value,
                        firstname: firstname.current.value,
                        lastname: lastname.current.value,
                        email: email.current.value,
                        password: password.current.value,
                  };
                  try {
                        await axios.post("http://localhost:8800/api/auth/register", user);
                        history.push("/login");
                  } catch (err) {
                        console.log(err);
                  }
            }
      };


      return (
            <Container>


                  <Wrapper>
                        <Logo>sheboss</Logo>

                        <Form onSubmit={handleClick}>

                              <Input placeholder="First name" required ref={firstname}/>
                              <Input placeholder="Last name" required ref={lastname}/>
                              <Input placeholder="Username" required ref={username}/>
                              <Input placeholder="Email" required ref={email}/>
                              <Input placeholder="Password" type="password" required ref={password}/>
                              <Input placeholder="Confirm password" type="password" required ref={confirmPassword}/>

                              <Agreement>
                                    By creating an account, I consent to the processing of my data
                                     in accondance with the PRIVACY POLICY and CONDITIONS of USE.
                              </Agreement>

                              <Button type="submit">CREATE</Button>
                              
                              <Link to="/login" style={{textDecoration: 'none', color: '#191919'}}>
                                    <NewAcc>
                                          Already have an account?
                                          <Link to="/login">Sign in</Link>
                                    </NewAcc>
                              </Link>

                        </Form>
                  </Wrapper>

                  <FormFooter>
                    <FaRegCopyright/>
                    <p>2022</p>
                    <p>SHEBOSS LIMITED.</p>
                    <p>All rights reserved.</p>
                  </FormFooter>

            </Container>
  )
}

export default Register