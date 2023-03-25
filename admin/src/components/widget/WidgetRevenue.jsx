import React, { useEffect, useState } from 'react';
import './widget.scss';
import axios from 'axios';


const WidgetRevenue = () => {

    //total users
    const [income, setIncome] = useState([]);

    useEffect(() => {
        const getIncome = async () => {
            try {
                const res = await axios.get("/orders/income");
                setIncome(res.data);
            } catch { }
        };
        getIncome();
    }, [])



    return (
        <>
            <div className='widget'>
                <div className='top'>
                    <span className='title'>CURRENT MONTHLY REVENUE</span>
                </div>
                <div className='bottom'>
                    <span className='counter1'>{income[0]?.total.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}ugx</span>
                </div>

                <span className='desc'>Current month sales</span>
            </div>

        </>
    )
}

export default WidgetRevenue