import React from 'react';
import './new.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';




const NewPdt = ({ inputs, title }) => {

    const [file, setFile] = useState("");
    const [info, setInfo] = useState({});
    const [cat, setCat] = useState([]);
    const [color, setColor] = useState([]);

    const navigate = useNavigate();


    const handleChange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleOptions = (e) => {
        setCat(e.target.value.split(" "));
    };

    const handleColor = (e) => {
        setColor(e.target.value.split(","));
    };


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

            const newproduct = {
                ...info,
                // categories: cat,
                color: color,
                size: cat,
                img: url,
            };

            await axios.post("/products", newproduct);
            navigate("/products");
        } catch (err) {
            console.log(err)
        }

    };
    console.log(info, cat, color);


    return (
        <div className='new'>

            <Sidebar />

            <div className="newContainer">
                <Topbar />

                <div className="top">
                    <h2 className="title">{title}</h2>
                </div>

                <div className="bottom">

                    <div className="left">
                        <img
                            src={
                                file
                                    ? URL.createObjectURL(file)
                                    : "https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?k=20&m=1357365823&s=612x612&w=0&h=ZH0MQpeUoSHM3G2AWzc8KkGYRg4uP_kuu0Za8GFxdFc="
                            }
                            alt=""
                        />

                    </div>

                    <div className="right">

                        <form>
                            <div className="imgInput">

                                <label htmlFor="file">
                                    Upload Image: <DriveFolderUploadIcon className='icon' />
                                </label>

                                <input
                                    type="file" id="file"
                                    style={{ display: 'none' }}
                                    onChange={(e) => setFile(e.target.files[0])}
                                />

                            </div>

                            {inputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input
                                        type={input.type}
                                        id={input.id}
                                        placeholder={input.placeholder}
                                        onChange={handleChange}
                                    />
                                </div>

                            ))}

                            <div className="formInput">
                                <label>Sizes</label>
                                <input type="text" name="size" placeholder="XS, S, M" onChange={handleOptions} />
                            </div>

                            <div className="formInput">
                                <label>Colors</label>
                                <input type="text" name="color" placeholder="Yellow, Blue" onChange={handleColor} />
                            </div>
                            <button onClick={handleClick}>Send</button>

                        </form>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default NewPdt