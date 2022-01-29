import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Action from "./Action";
import ContentList from "./Content/ContentList";

const Main = () => {
    return (
        <main className="container">
            <div className="content">
            <h2 className="content-title">Section Title</h2>
            <ContentList/>
            <Router>
                <Action/>
            </Router>      
            </div>
        </main>
    )
}

export default Main