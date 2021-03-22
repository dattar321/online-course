import React from 'react';
import './CourseDetail.css'

const CourseDetail = (props) => {
    const {name,price} = props.data;
    return (
        <div className = "course-detail"><br/>
            <h2>{name}</h2>
            <p>{price}</p>
            <button onClick={()=>props.addCourse(props.data)} className="btn btn-success">enroll</button>
        </div>
    );
};

export default CourseDetail;