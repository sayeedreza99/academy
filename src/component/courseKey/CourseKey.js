import React from 'react';
import { useParams } from 'react-router-dom';



const CourseKey = () => {
    const { courseId } = useParams();
    return (
        <div>
            <h1>{courseId}</h1>
            <p>hello, this is course.</p>
        </div>
    );
};

export default CourseKey;