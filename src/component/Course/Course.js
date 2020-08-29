import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


const Course = (props) => {
    // console.log(props);
    const { name, img, mentor, rating, price } = props.course;
    const btnStyle = { color: 'white', backgroundColor: 'goldenrod', width: '150px', height: '35px' };
    const imgStyle = { marginRight: '10px', padding: '10px' };
    return (
        <div className='container' style={{ borderBottom: '1px solid lightgray' }}>
            <div className="row">
                <div className='col-md-4'>
                    <img style={imgStyle} src={img} alt="" />
                </div>
                <div className='col-md-8'>
                    <h4>Course Name: {name}</h4>
                    <h5>Instructor: {mentor}</h5>
                    <p><small> Rating: {rating}</small></p>
                    <h4>Price: ${price}</h4>
                    <button class="btn btn-warning" style={btnStyle} onClick={() => props.handleAddCourse(props.course)}> <FontAwesomeIcon icon={faPlus} />Enroll now</button>

                </div>
            </div>
        </div>
    );
};

export default Course;