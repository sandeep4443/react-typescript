import React from 'react';
import { FaTh, FaUserAlt} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import mayoLogo from '../images/mayo-logo.png';

const Sidebar: React.FC = ({ children }) => {
    const menuItem = [
        {
            path: '/',
            name: 'Dashboard',
            icon: <FaTh />
        },
        {
            path: '/about',
            name: 'About',
            icon: <FaUserAlt />
        },
        {
            path: '/analytics',
            name: 'Analytics',
            icon: <FaUserAlt />
        },

    ]
    return (
        <div className='container'>
            <div className='sidebar' style={{ width:'300px'}}>
                <div className="image-container">
                    <div className="image">
                        <img src={mayoLogo} alt='img' />
                    </div>
                    <div className="text">
                        <h1>Workforce 360</h1>
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink
                            to={item.path}
                            key={index}
                            className={({ isActive }) => (isActive ? 'link' : 'inActive')}
                        >
                            <div className='icon'>{item.icon}</div>
                            <div className='link_text'>{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    )
}

export default Sidebar; 