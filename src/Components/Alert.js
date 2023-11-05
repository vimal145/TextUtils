import React from 'react'

function Alert(props) {

    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    // const capitalize = (word) => {
    //     if (typeof word === 'string' && word.length > 0) {
    //         const lower = word.toLowerCase();
    //         return lower.charAt(0).toUpperCase() + lower.slice(1);
    //     } else {
    //         return word; // Return the input as is if it's not a valid string
    //     }
    // }
    

    return (
        <div style={{height: '50px'}}>
        {
            props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>
                {capitalize(props.alert.type)}
            </strong>: {props.alert.msg}
        </div>
        }
        </div>
    )
}

export default Alert