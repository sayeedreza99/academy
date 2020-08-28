import React from 'react';
import { white } from 'color-name';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlus} from '@fortawesome/free-solid-svg-icons'


const Course = (props) => {
    // console.log(props);
    const { name, img, mentor, rating, price } = props.course;
    const btnStyle= { color: 'white', backgroundColor: 'goldenrod', borderRadius: '5px', width: '150px', height: '30px'};
    return (
        <div style={{ display: 'flex', borderBottom: '1px solid lightgray' }}>
            <div style={{ width: '30%', marginRight: '10px', padding: '10px' }} >
                <img src={img} alt="" />
            </div>
            <div style={{ width: '68%' }}>
                <h2>Course Name: {name}</h2>
                <h4>Instructor: {mentor}</h4>
                <p><small> Rating: {rating}</small></p>
                <h4>Price: {price}</h4>
                <button style={btnStyle} onClick={()=>props.handleAddCourse(props.course)}> <FontAwesomeIcon icon={faPlus} />Enroll now</button>
        </div>

        </div >
    );
};

export default Course;