import React from 'react';
import './newOrder.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const NewOrder = () => {

    const [info, setInfo] = useState({});
    const [items, setItems] = useState([]);
    const navigate = useNavigate();


    const handleChange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleOptions = (e) => {
        setItems(e.target.value.split(" "));
    };


    const handleClick = async (e) => {
        e.preventDefault();
        try {

            const neworder = {
                ...info,
                items: items,
            };

            await axios.post("/orders", neworder);
            navigate("/orders");
        } catch (err) {
            console.log(err)
        }

    };
    console.log(info, items);



    return (
        <div className='newOrder'>

            <Sidebar />

            <div className="newOrderContainer">

                <Topbar/>

                <div className="top">
                    <h2 className="title">Create New Order</h2>
                </div>

                <div className="bottom">

                    <div className="right">

                        <form>

                            <div className="formInput">
                                <label>User ID</label>
                                <input type="text" name="info" placeholder="632f1181489771684dca5871" onChange={handleChange} />
                            </div>
                            <div className="formInput">
                                <label>Address</label>
                                <input type="text" name="info" placeholder="Opp St. Mark Church, Kyanja" onChange={handleChange} />
                            </div>
                            <div className="formInput">
                                <label>Products</label>
                                <input type="text" name="size" placeholder="SB-P0001, SB-P0002" onChange={handleOptions} />
                            </div>
                            <div className="formInput">
                                <label>Amount</label>
                                <input type="text" name="info" placeholder="100,000" onChange={handleChange} />
                            </div>
                            <div className="formInput">
                                <label>Status</label>
                                <input type="text" name="info" placeholder="Processing" onChange={handleChange} />
                            </div>

                            <button id="btn_submit" type="submit" onClick={handleClick}>Send</button>

                        </form>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default NewOrder