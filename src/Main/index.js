import React from "react";
import propTypes from "prop-types";

const Main = props => 
    <main className="container">
        <div className="content">
        <h2 className="content-title">Section Title</h2>
        <ul className="row">
            <li className="col col-sm-6 content-card">
            <h3 className="content-card-title">Content Box 1</h3>
            </li>
            <li className="col col-sm-6 content-card">
            <h3 className="content-card-title">Content Box 2</h3>
            </li>
            <li className="col col-sm-6 content-card">
            <h3 className="content-card-title">Content Box 3</h3>
            </li>
            <li className="col col-sm-6 content-card">
            <h3 className="content-card-title">Content Box 4</h3>
            </li>
        </ul>
        <a href={props.webLink} className="button">Call To Action</a>
        <ul className="row">
            <li className="col col-sm-6 content-card">
            <h3 className="content-card-title">Content Box 1</h3>
            </li>
            <li className="col col-sm-6 content-card">
            <h3 className="content-card-title">Content Box 2</h3>
            </li>
            <li className="col col-sm-6 content-card">
            <h3 className="content-card-title">Content Box 3</h3>
            </li>
            <li className="col col-sm-6 content-card">
            <h3 className="content-card-title">Content Box 4</h3>
            </li>
        </ul>
        <ul className="row">
            <li className="col col-sm-6 content-card">
            <h3 className="content-card-title">Content Box 1</h3>
            </li>
            <li className="col col-sm-6 content-card">
            <h3 className="content-card-title">Content Box 2</h3>
            </li>
            <li className="col col-sm-6 content-card">
            <h3 className="content-card-title">Content Box 3</h3>
            </li>
            <li className="col col-sm-6 content-card">
            <h3 className="content-card-title">Content Box 4</h3>
            </li>
        </ul>
        </div>
    </main>

Main.propTypes = {
    webLink: propTypes.string.isRequired
}

export default Main