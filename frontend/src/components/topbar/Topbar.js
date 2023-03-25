import React, { useState, useContext } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from '../sidebar/SidebarData';
import './Topbar.css';
import { IconContext } from "react-icons";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/AuthContext';


function Topbar() {
    
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const { dispatch } = useContext(DarkModeContext);
    const { user } = useContext(AuthContext);



    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
    }

    return (
        <>
            <IconContext.Provider value={{ color: "undefined" }}>
                <div className="navbar">
                    <Link to="#" className="menu-bars" style={{textDecoration:'none'}}>
                        <FaIcons.FaBars className="menuIcon" onClick={showSidebar} />
                    </Link>

                    <div className='items'>

                        <div className='item1'>
                            <DarkModeOutlinedIcon className='icon' onClick={() => dispatch({ type: "TOGGLE" })} />
                        </div>
                        <div className='item2'>
                            <NotificationsNoneOutlinedIcon className='icon' />
                            <div className='counter'>1</div>
                        </div>
                        <div className='item2'>
                            <ChatBubbleOutlineOutlinedIcon className='icon' />
                            <div className='counter'>2</div>
                        </div>
                        <div className='item1'>
                            <img
                                src={user.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
                                alt=""
                                className='avatar'
                            />
                            <p>Hi {user.firstname}</p>
                        </div>

                    </div>

                </div>

                <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-menu-items" onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                                <AiIcons.AiOutlineClose className="menuIconClose"/>
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <div className='logout' onClick={handleLogout}>
                        <ExitToAppOutlinedIcon/>
                        <h3>LOGOUT</h3>
                    </div>

                </nav>


            </IconContext.Provider>
        </>
    );
}

export default Topbar;