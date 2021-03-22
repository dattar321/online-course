import React from 'react';

const CourseCart = (props) => {
    const total = props.course.reduce((total,i)=>
        total=total+parseFloat(i.price.substring(1))
    ,0); 
    return (
        <div>
            <h3>Enrolled Course: {props.course.length} </h3>
            <h4>Price : {total.toFixed(2)}</h4>
        </div>
    );
};

export default CourseCart;