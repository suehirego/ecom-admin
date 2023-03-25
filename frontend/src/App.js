import React from 'react';
import './App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
//pages
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import SingleProduct from './pages/SingleProduct';
import Login from './forms/Login';
import Register from './forms/Register';
import Cart from './pages/Cart';
import { useSelector } from 'react-redux';



const App = () => {

    const user = useSelector((state) => state.user.currentUser);

    return (
        <div>

            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route  path="/products/:category">
                        <ProductList/>
                    </Route>
                    <Route  path="/product/:id">
                        <SingleProduct/>
                    </Route>
                    <Route  path="/cart">
                        <Cart/>
                    </Route>
                    <Route  path="/login">
                        {user ? <Redirect to="/" /> : <Login/>}
                    </Route>
                    <Route  path="/register">
                        {user ? <Redirect to="/" /> : <Register/>}
                    </Route>
                    
                </Switch>
            </Router>
        </div>
    )
}

export default App