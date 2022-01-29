import React from 'react';

function ContentList (){
    let contentBox = []
    for (let i = 0 ; i < 4 ; i ++) {
    contentBox.push(`Content Box ${i+1}`);
    }
    let contentList = contentBox.map((item, index) => {
    return (
        <li className="col col-sm-6 content-card" key={index}>
        <h3 className="content-card-title">{item}</h3>
        </li>
    )
    })
    return (
        <>
            <ul className='row'>
            {contentList}
            </ul>
        </>
    );
}

export default ContentList;