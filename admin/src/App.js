import React, { useContext } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import Home from './pages/home/Home';
import Login from './pages/home/Login';
import NewUser from './pages/new/NewUser';
import SingleUser from './pages/single/SingleUser';
import SingleProduct from './pages/single/SingleProduct';
import SingleOrder from './pages/single/SingleOrder';
import NewOrder from './pages/new/NewOrder';
import { userInputs, productInputs } from './formData';
import './style/dark.scss';
import './app.scss';
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/AuthContext';
import Users from './pages/users/Users';
import Products from './pages/products/Products';
import Orders from './pages/orders/Orders';
import NewPdt from './pages/new/NewPdt';


const App = () => {

    const { darkMode } = useContext(DarkModeContext);

    const ProtectedRoute = ({ children }) => {
        const { user } = useContext(AuthContext);

        if (!user) {
            return <Navigate to="/login" />;
        }

        return children;
    };


    return (

        <div className={darkMode ? "app dark" : "app"}>
            <div className='container'>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route path="login" element={<Login />} />

                        <Route index element={
                            <ProtectedRoute>
                                <Home />
                            </ProtectedRoute>
                        } />

                        <Route path="users">
                            <Route index element={
                                <ProtectedRoute>
                                    <Users />
                                </ProtectedRoute>
                            } />
                            <Route path=":id" element={
                                <ProtectedRoute>
                                    <SingleUser inputs={userInputs} title="Update User" />
                                </ProtectedRoute>
                            } />
                            <Route path="new" element={
                                <ProtectedRoute>
                                    <NewUser inputs={userInputs} title="Add New User" />
                                </ProtectedRoute>
                            } />
                        </Route>

                        <Route path="products">
                            <Route index element={
                                <ProtectedRoute>
                                    <Products  />
                                </ProtectedRoute>
                            } />
                            <Route path=":id" element={
                                <ProtectedRoute>
                                    <SingleProduct inputs={productInputs} title="Update Product" />
                                </ProtectedRoute>
                            } />
                            <Route path="new" element={
                                <ProtectedRoute>
                                    <NewPdt inputs={productInputs} title="Add New Product"/>
                                </ProtectedRoute>
                            } />
                        </Route>

                        <Route path="orders">
                            <Route index element={
                                <ProtectedRoute>
                                    <Orders />
                                </ProtectedRoute>
                            } />
                            <Route path=":id" element={
                                <ProtectedRoute>
                                    <SingleOrder />
                                </ProtectedRoute>
                            } />
                            <Route path="new" element={
                                <ProtectedRoute>
                                    <NewOrder />
                                </ProtectedRoute>
                            } />
                        </Route>

                    </Route>
                </Routes>
            </BrowserRouter>
            </div>
        </div>
    )
}

export default App
