import React, { useContext } from 'react';
import './sidebar.scss';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import { AuthContext } from '../../context/AuthContext';


const Sdebar = () => {

    const { user, dispatch } = useContext(AuthContext);

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
    }


    return (
        <div className='sidebar'>

            <div className='sidebarFixed'>

                {/* TOP */}
                <div className='top'>
                    <Link to="/" style={{ textDecoration: 'none', color: '#282828' }}>
                        <span className='logo'>shebossAdmin</span>
                    </Link>
                </div>

                {/* CENTER */}
                <div className='center'>
                    <ul>
                        <p className='title'>HOME</p>

                        <Link to="/" style={{ textDecoration: 'none', color: '#282828' }}>
                            <li>
                                <DashboardIcon className='icon' />
                                <span>Dashboard</span>
                            </li>
                        </Link>

                        <p className='title'>LISTS / ACTIVE LINKS</p>

                        <Link to="/users" style={{ textDecoration: 'none', color: '#282828' }}>
                            <li>
                                <PeopleAltOutlinedIcon className='icon' />
                                <span>Users</span>
                            </li>
                        </Link>

                        <Link to="/products" style={{ textDecoration: 'none', color: '#282828' }}>
                            <li>
                                <Inventory2OutlinedIcon className='icon' />
                                <span>Products</span>
                            </li>
                        </Link>

                        <Link to="/orders" style={{ textDecoration: 'none', color: '#282828' }}>
                            <li>
                                <DescriptionOutlinedIcon className='icon' />
                                <span>Orders</span>
                            </li>
                        </Link>


                        <li
                            onClick={handleLogout}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'absolute',
                                bottom: 35,
                                right: 0, left: 0,
                            }}>
                            <ExitToAppOutlinedIcon className='icon' style={{ color: 'red' }} />
                            <span style={{ color: 'red' }}>{user && "LOGOUT"}</span>
                        </li>
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Sdebar