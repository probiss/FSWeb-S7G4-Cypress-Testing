import React from 'react';

const Error=(props) => {
    const {errors} = props;
    let errorArray = Object.values(errors);

    return errorArray.map((item,index) => <p key={index} >{item}</p>);

};

export default Error ;