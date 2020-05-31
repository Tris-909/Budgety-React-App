import React from 'react';

const SingleIncItem = (props) => {
    return(
        <div>
            <div>description{props.description}</div>
            <div>
            <div>+ value{props.value}</div>
                <div>
                    <button>Trash</button>
                </div>
            </div>
        </div>
    );
} 

export default SingleIncItem;