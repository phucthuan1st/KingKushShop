import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className='container header w-100'>
            <div className='background-image'></div>
            <div className='nav-flex'>
                <div className='brand h-100' >
                    <h2 className='white-text'>King Kush Medicinal</h2>
                </div >
                <div className='nav h-100'>
                    <div className="nav-item">Home</div>
                    <div className="nav-item">Products</div>
                    <div className="nav-item">About</div>
                    <div className="nav-item">Contact</div>
                    <div className="nav-item cart-icon">$100 <FontAwesomeIcon icon={faShoppingCart} /></div>
                </div>
            </div >
            <div className='welcome-flex centered'>
                <h2 className='white-text'>WELCOME TO KING KUSH MEDICINAL</h2>
                <h1 className='white-text'>Let's Bring some Goods to your Home!</h1>
                <div className='button-wrapper'>
                    <div className='button white-text'>
                        Shop Now
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Header;