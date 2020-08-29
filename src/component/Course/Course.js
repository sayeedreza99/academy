import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


const Course = (props) => {
    // console.log(props);
    const { name, img, mentor, rating, price } = props.course;
    const btnStyle = { color: 'white', backgroundColor: 'goldenrod', width: '150px', height: '35px' };
    const imgStyle = { width: '25%', marginRight: '10px', padding: '10px' };
    return (
        <div style={{ display: 'flex', borderBottom: '1px solid lightgray' }}>
            <img style={imgStyle} src={img} alt="" />
            <div style={{ width: '60%' }}>
                <h2>Course Name: {name}</h2>
                <h4>Instructor: {mentor}</h4>
                <p><small> Rating: {rating}</small></p>
                <h4>Price: ${price}</h4>
                <button class="btn btn-warning" style={btnStyle} onClick={() => props.handleAddCourse(props.course)}> <FontAwesomeIcon icon={faPlus} />Enroll now</button>
            </div>

        </div >
    );
};

export default Course;