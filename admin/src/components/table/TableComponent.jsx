import React, { useState, useEffect } from 'react';
import './table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import moment from 'moment';

const TableComponent = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
            try {
                const res = await axios.get("/orders");
                setOrders(res.data);
            } catch { }
        };
        getOrders();
    }, []);


    return (
        <TableContainer component={Paper} className='table'>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className='tableCellTitle'>Tracking ID</TableCell>
                        <TableCell className='tableCellTitle'>Customer</TableCell>
                        <TableCell className='tableCellTitle'>Date</TableCell>
                        <TableCell className='tableCellTitle'>Amount</TableCell>
                        <TableCell className='tableCellTitle'>Payment Method</TableCell>
                        <TableCell className='tableCellTitle'>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.map((order) => (
                        <TableRow key={order._id}>
                            <TableCell className='tableCell'>SBOSS-000{order.entry}</TableCell>
                            <TableCell className='tableCell'>{order.userId}</TableCell>
                            <TableCell className='tableCell'>{moment(order.createdAt).format('DD / MM / YYYY')}</TableCell>
                            <TableCell className='tableCell'>{order.amount.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</TableCell>
                            <TableCell className='tableCell'>
                                <span className={`paymentMethod ${order.paymentMethod}`}>{order.paymentMethod}</span>
                            </TableCell>
                            <TableCell className='tableCell'>
                                <span className={`status ${order.status}`}>{order.status}</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableComponent