import React from "react";
import propTypes from "prop-types";

const Header = props => {
    const isOpeningMenu = props.isOpeningMenu

    return (
        <div>
            <nav className="navbar">
            <div className="container">
                <div className="navbar-content">
                <h1 className="logo">
                    <a 
                        href={props.webLink} 
                        className="logo-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        >Website Title/logo</a>
                </h1>
                <button 
                    type="button" 
                    className="navbar-button"
                    isOpeningMenu={isOpeningMenu}
                    onClick={(e) => props.toggleMenuBtn(e)}>
                    <span className="material-icons-outlined"> menu </span>
                </button>
                <ul className="navbar-list">
                    <li><a href={props.webLink}>Item 1</a></li>
                    <li><a href={props.webLink}>Item 2</a></li>
                    <li><a href={props.webLink}>Item 3</a></li>
                    <li><a href={props.webLink}>Item 4</a></li>
                </ul>
                </div>
            </div>
            </nav>
            <div className={`mobile-menu d-none ${props.className}`}>
            <div className={`mobile-menu-content ${props.className}`}>
                <button 
                    type="button" 
                    className="mobile-menu-closeBtn material-icons-outlined"
                    isOpeningMenu={isOpeningMenu}
                    onClick={(e) => props.toggleMenuBtn(e)}
                    >
                close
                </button>
                <ul className="mobile-menu-list">
                <li><a href={props.webLink}>Item 1</a></li>
                <li><a href={props.webLink}>Item 2</a></li>
                <li><a href={props.webLink}>Item 3</a></li>
                <li><a href={props.webLink}>Item 4</a></li>
                </ul>
            </div>
            </div>
            <header className="header">
            <h3>Welcome Message</h3>
            </header>
        </div>

    )}

Header.propTypes = {
    webLink: propTypes.string.isRequired,
    toggleMenuBtn: propTypes.func.isRequired,
    isOpeningMenu: propTypes.bool.isRequired
}

export default Header ;