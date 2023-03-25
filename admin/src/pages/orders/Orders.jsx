import React, { useEffect, useState } from 'react';
import './list.scss';
import './datatable.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import { DataGrid } from '@mui/x-data-grid';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import moment from "moment";
import Topbar from '../../components/topbar/Topbar';


const Orders = () => {

    const location = useLocation();
    const path = location.pathname.split("/")[1];
    const [orders, setOrders] = useState([]);


    useEffect(() => {
        const fetchOrders = async () => {
            const res = await axios.get("/orders")
            setOrders(res.data)
        }
        fetchOrders();
    }, []);


    const handleDelete = async (id) => {
        try {
            await axios.delete(`/${path}/${id}`);
            setOrders(orders.filter((item) => item._id !== id));
        } catch (err) { }
    };


    const columns = [

        { field: "entry", headerName: "ID", width: 20 },
        {
            field: "createdAt",
            headerName: "Date",
            width: 160,
            renderCell: (params) => {
                return (
                    <div className="cellName">
                        {moment(params.row.createdAt).format('DD / MM / YYYY')}
                    </div>
                );
            },
        },
        {
            field: "userId",
            headerName: "User ID",
            width: 230,
            renderCell: (params) => {
                return (
                    <div className="cellName">
                        {params.row.userId}
                    </div>
                );
            },
        },
        {
            field: "amount",
            headerName: "Amount",
            width: 160,
            renderCell: (params) => {
                return (
                    <div className="cellName">
                        {params.row.amount?.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
                    </div>
                );
            },
        },
        {
            field: "address",
            headerName: "Address",
            width: 120,
        },
        {
            field: "paymentMethod",
            headerName: "Payment Method",
            width: 140,
            renderCell: (params) => {
                return (
                    <div className={`paymentMethod ${params.row.paymentMethod}`}>
                        {params.row.paymentMethod}
                    </div>
                );
            },
        },
        {
            field: "status",
            headerName: "Status",
            width: 100,
            renderCell: (params) => {
                return (
                    <div className={`status ${params.row.status}`}>
                        {params.row.status}
                    </div>
                );
            },
        },
        {
            field: "action",
            headerName: "Action",
            width: 130,
            renderCell: (params) => {
                return (
                    <div className="cellAction">

                        <Link to={{ pathname: `/${path}/` + params.row._id, user: params.row }} style={{ textDecoration: "none", color: 'darkgreen' }}>
                            <div className="viewButton">View</div>
                        </Link>

                        <div
                            className="deleteButton"
                            onClick={() => handleDelete(params.row._id)}
                        >
                            Delete
                        </div>
                    </div>

                );
            },
        },
    ];

    return (
        <div className='list'>
            <Sidebar />
            <div className="listContainer">
                <Topbar/>

                <div className='datatable'>
                    <div className="datatableTitle" style={{ textTransform: 'capitalize' }}>
                        {path}
                        <Link to={`/${path}/new`} style={{ textDecoration: 'none' }} className="link">
                            Add New
                        </Link>
                    </div>


                    <DataGrid
                        className='datagrid'
                        rows={orders}
                        columns={columns}
                        pageSize={9}
                        rowsPerPageOptions={[9]}
                        checkboxSelection
                        getRowId={(row) => row._id}
                    />
                </div>


            </div>
        </div>
    )
}

export default Orders