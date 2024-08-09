import React from 'react';
import './CourseList.css';

function CourseList({ courses }) {
  return (
    <div>
      <h3>Courses:</h3>
      <ul>
        {courses.map((course) => (
          <li key={course}>{course}</li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
