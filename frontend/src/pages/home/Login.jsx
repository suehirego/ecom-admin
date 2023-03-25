import React from "react";
import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import './login.scss';
import axios from "axios";



const Login = () => {


    const [credentials, setCredentials] = useState({
        email: undefined,
        password: undefined,
    });

    const { loading, error, dispatch } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("/auth/login", credentials);
            if (res.data.isAdmin) {
                dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
                navigate("/");
            } else {
                dispatch({
                    type: "LOGIN_FAILURE",
                    payload: { message: "You are not allowed!" },
                });
            }
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
    };


    return (
        <div className="login">
            <div className="loginWrapper">
                <h3>sheboss</h3>
                <input
                    type="text"
                    placeholder="Email"
                    id="email"
                    onChange={handleChange}
                />

                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    onChange={handleChange}
                />

                <Link to="/login"
                    style={{ textDecoration: 'none', color: 'purple' }}
                    disabled={loading} onClick={handleClick}
                    className="loginBtn"
                >
                    Login
                </Link>

                {error && <span>{error.message}</span>}
            </div>

        </div>
    );
};

export default Login;
