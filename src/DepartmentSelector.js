import React from 'react';

function DepartmentSelector({ departments, setSelectedDepartment, selectedDepartment }) {
  return (
    <div>
      <label>Select Department:</label>
      <select onChange={(e) => setSelectedDepartment(e.target.value)} value={selectedDepartment}>
        <option value="">Select...</option>
        {departments.map((dept) => (
          <option key={dept.department} value={dept.department}>
            {dept.department}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DepartmentSelector;
