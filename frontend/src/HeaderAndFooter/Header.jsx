import { faBell, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import "./Header.css";
import brandLogo from "./brandLogo.png";
import navItemsData from "./navbarItems.json";

const Header = ({ navItemSelected }) => {
    const [selectedItem, setSelectedItem] = useState("home");

    const handleItemSelection = (itemId) => {
        setSelectedItem(itemId);
        navItemSelected(itemId);
    }

    return (
        <div className="Header">
            <div className="leftNavArea">
                {navItemsData.map(item => (
                    <NavItem
                        key={item.id}
                        id={item.id}
                        text={item.text}
                        selected={selectedItem === item.id}
                        onClick={() => handleItemSelection(item.id)}
                    />
                ))}
            </div>
            <div className='brandLogo'>
                <img src={brandLogo} alt="Brand Logo" />
            </div>
            <div className="rightNavArea">
                <IconButton icon={faShoppingCart} />
                <IconButton icon={faBell} />
                <IconButton icon={faUser} />
            </div>
        </div>
    );
}

const NavItem = ({ id, text, selected, onClick }) => {
    return (
        <div className={`nav-item ${selected ? 'selected' : ''}`} onClick={onClick}>
            {text}
        </div>
    );
}

const IconButton = ({ icon, onClick }) => {
    return (
        <button className="icon-button" onClick={onClick}>
            <FontAwesomeIcon icon={icon} />
        </button>
    );
}

export default Header;
