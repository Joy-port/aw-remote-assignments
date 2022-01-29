import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom" ;
import { SidebarData } from "./SidebarData";

function Navbar() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <Link to="#" className='navbar-button'>
                <FaIcons.FaBars onClick={showSidebar}/>
            </Link>
            <ul className="navbar-list">
                { SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span className="ml-1">{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <div>
                <IconContext.Provider value={{color: 'darkblue'}}>
                    <div className={sidebar ? "mobile-menu-backdrop" : ''}></div>
                        <nav className={sidebar ? 'mobile-menu-content mobile-menu-slideIn' : 'mobile-menu-content'}>
                            <ul className="mobile-menu-list" onClick={showSidebar}>
                                <li>
                                <Link to='#' 
                                    className="mobile-menu-closeBtn"
                                    >
                                    <AiIcons.AiOutlineClose/>
                                </Link>
                                </li>
                                { SidebarData.map((item, index) => {
                                    return (
                                        <li key={index} className={item.cName}>
                                            <Link to={item.path}>
                                                {item.icon}
                                                <span className="ml-2">{item.title}</span>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>
                </IconContext.Provider>
            </div>
        </>
    )
}

export default Navbar;