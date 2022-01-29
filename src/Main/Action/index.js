import React, { useState } from 'react';
import * as MdIcons from 'react-icons/md';
import { Link } from 'react-router-dom';
import Content from '../Content';

function Action() {
    const [content, callContents] = useState(0);

    const showContent = () => callContents(content +1);

    return (
        <>
            <Link to='#' 
                className="button"
                onClick={showContent}>
                <MdIcons.MdAdsClick/> 
                <span>Call to Action</span> 
            </Link>
            <Content
                show={content}></Content>
        </>
    );
}

export default Action;
