import React, { useEffect, useState } from 'react';
import './single.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Topbar from '../../components/topbar/Topbar';



const SingleUser = () => {

    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [user, setUser] = useState({});

    //GET SINGLE USER
    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get("/users/find/" + path);
            setUser(res.data);
        };
        fetchUser();
    }, [path]);


    //EDIT / UPDATE USER
    const [file, setFile] = useState("");
    const [username, setUsername] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");


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

            const updatedUser = {
                img: url,
            };

            await axios.put("/users/" + user._id, updatedUser);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updatedUser = {
                username: username,
                firstname: firstname,
                lastname: lastname,
                email: email,
                address: address,
            };

            await axios.put("/users/" + user._id, updatedUser);
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
                        <h2 className="title">User Details</h2>
                        <div className="item">
                            <img
                                src={user.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
                                alt=""
                                className="itemImg"
                            />

                            <div className="itemDetails">
                                <h3 className="detailsTitle">{user.firstname + " " + user.lastname}</h3>
                                <div className="detailsItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">{user.email}</span>
                                </div>

                                <div className="detailsItem">
                                    <span className="itemKey">Address:</span>
                                    <span className="itemValue">{user.address}</span>
                                </div>

                                <div className="detailsItem">
                                    <span className="itemKey">City:</span>
                                    <span className="itemValue">{user.city}</span>
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
                                        Edit User Image: <DriveFolderUploadIcon className='icon' />
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
                        <h2 className="title">Edit User Info</h2>

                        <form onSubmit={handleSubmit}>
                            <div className='editForm'>

                                <div className="formInput">
                                    <label>Username</label>
                                    <input
                                        type="text"
                                        value={username}
                                        placeholder={user.username}
                                        onChange={(e) => { setUsername(e.target.value) }}
                                    />
                                </div>
                                <div className="formInput">
                                    <label>First Name</label>
                                    <input
                                        type="text"
                                        value={firstname}
                                        placeholder={user.firstname}
                                        onChange={(e) => setFirstname(e.target.value)}
                                    />
                                </div>
                                <div className="formInput">
                                    <label>Last Name</label>
                                    <input
                                        type="text"
                                        value={lastname}
                                        placeholder={user.lastname}
                                        onChange={(e) => setLastname(e.target.value)}
                                    />
                                </div>
                                <div className="formInput">
                                    <label>Email</label>
                                    <input
                                        type="text"
                                        value={email}
                                        placeholder={user.email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="formInput">
                                    <label>Address</label>
                                    <input
                                        type="text"
                                        value={address}
                                        placeholder={user.address}
                                        onChange={(e) => setAddress(e.target.value)}
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

export default SingleUser





