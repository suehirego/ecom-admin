import React, { useEffect, useState } from 'react';
import './list.scss';
import './datatable.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import { DataGrid } from '@mui/x-data-grid';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';


const Users = () => {

    const location = useLocation();
    const path = location.pathname.split("/")[1];
    const [users, setUsers] = useState([]);


    useEffect(() => {
        const fetchUsers = async () => {
            const res = await axios.get("/users")
            setUsers(res.data)
        }
        fetchUsers();
    }, []);


    const handleDelete = async (id) => {
        try {
          await axios.delete(`/${path}/${id}`);
          setUsers(users.filter((item) => item._id !== id));
        } catch (err) {}
      };


    const columns = [
        { field: "entry", headerName: "ID", width: 70 },
        {
            field: "user",
            headerName: "User",
            width: 180,
            renderCell: (params) => {
                return (
                    <div className="cellWidthImg">
                        <img className="cellImg"
                            src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
                            alt="avatar"
                        />
                        {params.row.username}
                    </div>
                );
            },
        },
        {
            field: "fullname",
            headerName: "Full Name",
            width: 170,
            renderCell: (params) => {
                return (
                    <div className="cellName">
                        {params.row.firstname}
                        {" "}
                        {params.row.lastname}
                    </div>
                );
            },
        },
        { field: "email", headerName: "Email", width: 230 },
        { field: "address", headerName: "Address", width: 180 },
        { field: "city", headerName: "City", width: 100 },


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
                <Topbar />

                <div className='datatable'>
                    <div className="datatableTitle" style={{ textTransform: 'capitalize' }}>
                        {path}
                        <Link to={`/${path}/new`} style={{ textDecoration: 'none' }} className="link">
                            Add New
                        </Link>
                    </div>


                    <DataGrid
                        className='datagrid'
                        rows={users}
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

export default Users