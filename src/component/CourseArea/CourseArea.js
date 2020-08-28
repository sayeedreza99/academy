import React, { useState } from 'react';
import fakeData from '../../fakeData/fakeData';
import './CourseArea.css';
import Course from './Course/Course';
import SelectedCourse from '../SelectedCourse/SelectedCourse';


const CourseArea = () => {
    const [course, setCourse] = useState(fakeData);
    // console.log(fakeData);
    const [cart, setCart] = useState([])

    const handleAddCourse = (course) => {
        console.log('Course added', course)
        const NewCart = [...cart, course];
        setCart(NewCart);

    }

    return (
        <div className='course-container'>
            <div className="course-list-container">
                <h1>Course List</h1>
                {
                    course.map(n => <Course handleAddCourse={handleAddCourse} course={n}></Course>)
                }
            </div>
            <div className='selected-course-container'>
                <h1>Selected Course</h1>
                <h5>Order Summary:{cart.length}</h5>
                <SelectedCourse cart={cart}></SelectedCourse>

            </div>
        </div>
    );
};

export default CourseArea;