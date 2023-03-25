import React, { useState, useEffect } from 'react';
import './singleorder.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Topbar from '../../components/topbar/Topbar';


const SingleUser = () => {

    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [order, setOrder] = useState({});


    //GET SINGLE order
    useEffect(() => {
        const fetchOrder = async () => {
            const res = await axios.get("/orders/find/" + path);
            setOrder(res.data);
        };
        fetchOrder();
    }, [path]);


    return (
        <div className='single'>
            <Sidebar />
            <div className="singleContainer">

                <Topbar />

                <div className="top">
                    <div className="left">

                        <h2 className="title">Order  Details</h2>
                        <div className="item">

                            <div className="itemDetails">

                                <div className="detailsItem">
                                    <span className="itemKey">Order ID:</span>
                                    <span className="itemValue">SBOSS-000{order.id}</span>
                                </div>

                                <div className="detailsItem2">
                                    <span className="itemKey">User ID:</span>
                                    <span className="itemValue">{order.userId}</span>
                                </div>

                                <div className="detailsItem">
                                    <span className="itemKey">Amount:</span>
                                    <span className="itemValue">{order.amount?.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}ugx</span>
                                </div>

                                <div className="detailsItem">
                                    <span className="itemKey">Address:</span>
                                    <span className="itemValue">{order.address}</span>
                                </div>


                                <div className="detailsItem">
                                    <span className="itemKey">Payment Method:</span>
                                    <span className="itemValue">{order.paymentMethod}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='right'>
                        <div className='statusWrapper'>
                            <span className="itemValue">{order.status}</span>
                        </div>
                    </div>




                </div>

                       
                  </div>
            </div>
      )
}

export default SingleUser