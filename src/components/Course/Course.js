import React, { useState } from 'react';
import './Course.css'
import CourseDetail from '../CourseDetail/CourseDetail';
import data from '../../data'
import CourseCart from '../CourseCart/CourseCart';


const Course = () => {
    const [course,setCourse]=useState([]);
    const addCourse = (p)=>{
        setCourse([...course,p]);
    }
    const showData = data.slice(0,13);
    return (
        <div>
            <div className="row">
                <div className="col-md-9  main-sec">
                    {
                        showData.map(data=>
                            <CourseDetail data={data} 
                            addCourse={addCourse}> </CourseDetail>    
                        )
                    }
                </div>
                <div className="col-md-3">
                    <CourseCart course={course} ></CourseCart>
                </div>
            </div>
        </div>
    );
};

export default Course;