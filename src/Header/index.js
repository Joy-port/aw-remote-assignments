import React from "react";
import propTypes from "prop-types";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Reports from "./Pages/Reports";
import Products from "./Pages/Products";
import Team from "./Pages/Team";
import Messages from "./Pages/Messages";
import Support from "./Pages/Support";

const Header = props => {
    return (
        <>
            <Router>
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
                            <Navbar/>
                        </div>
                    </div>
                </nav>
                <header className="header">
                    <Routes>
                        <Route path="/" exact element={<Home/>}></Route>
                        <Route path="/reports"  element={<Reports/>}></Route>
                        <Route path="/products"  element={<Products/>}></Route>
                        <Route path="/team"  element={<Team/>}></Route>
                        <Route path="/messages"  element={<Messages/>}></Route>
                        <Route path="/support"  element={<Support/>}></Route>
                    </Routes>
                </header>
            </Router>
        </>
    )
}

Header.propTypes = {
    webLink: propTypes.string.isRequired
}

export default Header ;