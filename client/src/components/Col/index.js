import React from 'react'

function Col(props) {

    return (
        <div className={props.columns}>
            {props.children}
        </div>
    )
}

export default Col