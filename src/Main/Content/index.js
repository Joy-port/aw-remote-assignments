import React from 'react';
import propTypes from 'prop-types';

function Content (props){
  let contentBox = []
  for (let i = 0 ; i < 4 ; i ++) {
    contentBox.push(`Content Box ${i+1}`);
  }
  let contentList = contentBox.map((item, index) => {
    return (
      <li 
        className="col col-sm-6 content-card" 
        key={index}>
        <h3 className="content-card-title">
          {item}
        </h3>
      </li>
    )
  })
  return (
    <>
      <ul className={props.show >= 1 ? 'row' : 'd-none'}>
        {contentList}
      </ul>
      <ul className={props.show >= 2 ? 'row' : 'd-none'}>
        {contentList}
      </ul>
    </>
  );
}

Content.prototype ={
  show: propTypes.bool.isRequired
}

export default Content;