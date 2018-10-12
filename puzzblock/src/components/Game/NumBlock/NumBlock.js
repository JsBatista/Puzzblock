import React from 'react';

const numBlock = (props) => {
    return(
        <div className="blockDiv" onClick={()=>{props.swap(props.number, props.index)}}>
            <h1>{props.number==0? " ": props.number}</h1>
        </div>
    );
}

export default numBlock;
