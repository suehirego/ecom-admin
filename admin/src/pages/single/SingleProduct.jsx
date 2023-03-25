import React, { useEffect, useState } from 'react';
import './single.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import { useLocation } from 'react-router-dom';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import axios from 'axios';
import Topbar from '../../components/topbar/Topbar';


const SingleProduct = () => {

    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});

    // const params = useParams();


    //GET SINGLE PRODUCT
    useEffect(() => {
        const fetchProduct = async () => {
            const res = await axios.get("/products/find/" + path);
            setProduct(res.data);
        };
        fetchProduct();
    }, [path]);


    //EDIT / UPDATE PRODUCT
    const [file, setFile] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [categories, setCategories] = useState("");
    const [price, setPrice] = useState("");
    const [newPrice, setNewPrice] = useState("");
    const [brand, setBrand] = useState("");


    const handleClick = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "upload");
        try {
            const uploadRes = await axios.post(
                "https://api.cloudinary.com/v1_1/tunjooadmin/image/upload",
                data
            );

            const { url } = uploadRes.data;

            const updatedProduct = {
                img: url,
            };

            await axios.put("/products/" + product._id, updatedProduct);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updatedProduct = {
                title: title,
                desc: desc,
                categories: categories,
                brand: brand,
                price: price,
                newPrice: newPrice,
            };

            await axios.put("/products/" + product._id, updatedProduct);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }

    }



    return (
        <div className='single'>
            <Sidebar />
            <div className="singleContainer">

                <Topbar />

                <div className="top">
                    <div className="singleLeft">
                        <h2 className="title">Product Details</h2>
                        <div className="item">
                            <img
                                src={product.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
                                alt=""
                                className="itemImg"
                            />
                            <div className="itemDetails">
                                <h3 className="detailsTitle">{product.title}</h3>
                                <div className="detailsItem">
                                    <span className="itemKey">Id:</span>
                                    <span className="itemValue">SB-P000{product.entry}</span>
                                </div>

                                <div className="detailsItem">
                                    <span className="itemKey">Description:</span>
                                    <span className="itemValue">{product.desc}</span>
                                </div>

                                <div className="detailsItem2">
                                    <span className="itemKey">Categories:</span>
                                    <span className="itemValue">{product.categories + " "}</span>
                                </div>

                                <div className="detailsItem2">
                                    <span className="itemKey">Size:</span>
                                    <span className="itemValue">{product.size}</span>
                                </div>

                                <div className="detailsItem2">
                                    <span className="itemKey">Brand:</span>
                                    <span className="itemValue">{product.brand}</span>
                                </div>

                                <div className="detailsItem2">
                                    <span className="itemKey">Price:</span>
                                    <span className="itemValue">{product.price?.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}ugx</span>
                                </div>

                                <div className="detailsItem2">
                                    <span className="itemKey">Sale Price:</span>
                                    <span className="itemValue">{product.newPrice?.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}ugx</span>
                                </div>

                            </div>
                        </div>

                        <form>

                            <div className="itemForm">

                                <div className="rightImg">
                                    <img
                                        src={
                                            file
                                                ? URL.createObjectURL(file)
                                                : "https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?k=20&m=1357365823&s=612x612&w=0&h=ZH0MQpeUoSHM3G2AWzc8KkGYRg4uP_kuu0Za8GFxdFc="
                                        }
                                        alt=""
                                    />

                                </div>

                                <div className="imgInput">

                                    <label htmlFor="file">
                                        Edit Product Image: <DriveFolderUploadIcon className='icon' />
                                    </label>

                                    <input
                                        type="file" id="file"
                                        style={{ display: 'none' }}
                                        onChange={(e) => setFile(e.target.files[0])}
                                    />

                                </div>

                                <button onClick={handleClick} className="itemButton">Update</button>

                            </div>


                        </form>

                    </div>

                    <div className="singleRight">
                        <h2 className="title">Edit Product Info</h2>

                        <form onSubmit={handleSubmit}>
                            <div className='editForm'>

                                <div className="formInput">
                                    <label>Title</label>
                                    <input
                                        type="text"
                                        value={title}
                                        placeholder={product.title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>
                                <div className="formInput">
                                    <label>Description</label>
                                    <input
                                        type="text"
                                        value={desc}
                                        placeholder={product.desc}
                                        onChange={(e) => setDesc(e.target.value)}
                                    />
                                </div>
                                <div className="formInput">
                                    <label>Category</label>
                                    <input
                                        type="text"
                                        value={categories}
                                        placeholder={product.categories}
                                        onChange={(e) => setCategories(e.target.value)}
                                    />
                                </div>
                                <div className="formInput">
                                    <label>Brand</label>
                                    <input
                                        type="text"
                                        value={brand}
                                        placeholder={product.brand}
                                        onChange={(e) => setBrand(e.target.value)}
                                    />
                                </div>
                                <div className="formInput">
                                    <label>Price</label>
                                    <input
                                        type="text"
                                        value={price}
                                        placeholder={product.price}
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
                                </div>
                                <div className="formInput">
                                    <label>Sale Price</label>
                                    <input
                                        type="text"
                                        value={newPrice}
                                        placeholder="0.00"
                                        onChange={(e) => setNewPrice(e.target.value)}
                                    />
                                </div>

                                <button type='submit' className="formButton">Update</button>

                            </div>

                        </form>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default SingleProduct