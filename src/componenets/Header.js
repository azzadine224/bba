import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../img/logo.png'


const Header = () => {
    return ( 
        <div className='center'>
            <Link to='/' >
            <img src={logo} alt="" />
            </Link>
        </div>
    );
}
 
export default Header;