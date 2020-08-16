import React from 'react'

function Row(props) {

    return (
        <div className={"row " + props.attributes}>
            {props.children}
        </div>
    )
}

export default Row