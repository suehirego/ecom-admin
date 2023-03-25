import React, { useEffect, useState } from 'react';
import './list.scss';
import './datatable.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import { DataGrid } from '@mui/x-data-grid';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import Topbar from '../../components/topbar/Topbar';


const Products = () => {

    const location = useLocation();
    const path = location.pathname.split("/")[1];
    const [products, setProducts] = useState([]);


    useEffect(() => {
        const fetchProducts = async () => {
            const res = await axios.get("/products")
            setProducts(res.data)
        }
        fetchProducts();
    }, []);


    const handleDelete = async (id) => {
        try {
            await axios.delete(`/${path}/${id}`);
            setProducts(products.filter((item) => item._id !== id));
        } catch (err) { }
    };


    const columns = [
        { field: "entry", headerName: "ID", width: 70 },
        {
            field: "product",
            headerName: "Product",
            width: 290,
            renderCell: (params) => {
                return (
                    <div className="cellWidthImg">
                        <img className="cellImg"
                            src={params.row.img || "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
                            alt=""
                        />
                        {params.row.title}
                    </div>
                );
            },
        },
        { field: "categories", headerName: "Categories", width: 160 },
        { field: "size", headerName: "Sizes", width: 80 },
        { field: "brand", headerName: "Brand", width: 120 },
        {
            field: "price",
            headerName: "Price",
            width: 100,
            renderCell: (params) => {
                return (
                    <div className="cellName">
                        {params.row.price?.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
                    </div>
                );
            },
        },

        {field: "inStock", headerName: "inStock", width: 100 },


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
                        rows={products}
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

export default Products