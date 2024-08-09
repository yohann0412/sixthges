import React, { useState } from 'react';
import DepartmentSelector from './DepartmentSelector';
import CourseList from './CourseList';
import './CourseList.css'
const coursesData = {
  'Information Technology Fluency': [
    { department: 'Biology', courses: ['BILD 62'] },
    { department: 'Cognitive Science', courses: ['COGS 3', 'COGS 8', 'COGS 18'] },
    { department: 'Computational Social Science', courses: ['CSS 1'] },
    { department: 'Computer Science and Engineering', courses: ['CSE 3', 'CSE 6R', 'CSE 8A', 'CSE 11'] },
    { department: 'Data Science', courses: ['DSC 10', 'DSC 20'] },
    { department: 'Electrical and Computer Engineering', courses: ['ECE 15'] },
    { department: 'Mechanical and Aerospace Engineering', courses: ['MAE 5', 'MAE 8'] },
    { department: 'NanoEngineering', courses: ['NANO 15', 'CENG 15'] },
    { department: 'Structural Engineering', courses: ['SE 9'] },
  ],
  'Social Analysis': [
    { department: 'Anthropology', courses: ['ANAR 100-121A', 'ANAR 165-191', 'ANBI 100', 'ANBI 132', 'ANBI 159', 'ANSC 100-125', 'ANSC 136', 'ANSC 145', 'ANSC 160-185', 'ANTH 1-4', 'ANTH 21', 'ANTH 23', 'ANTH 101-103'] },
    { department: 'Cognitive Science', courses: ['COGS 1', 'COGS 11', 'COGS 15'] },
    { department: 'Communication', courses: ['COMM 10', 'COMM 20', 'COMM 30'] },
    { department: 'Critical Gender Studies', courses: ['CGS 2A', 'CGS 2B', 'CGS 105', 'CGS 112', 'CGS 114', 'CGS 117', 'CGS 120', 'CGS 137', 'CGS 147', 'CGS 150', 'CGS 165', 'CGS 187'] },
    { department: 'Economics', courses: ['ECON 1-3'] },
    { department: 'Education Studies', courses: ['EDS 25', 'EDS 117', 'EDS 125', 'EDS 126'] },
    { department: 'Ethnic Studies', courses: ['ETHN 1-3', 'ETHN 20', 'ETHN 100-189'] },
    { department: 'International Studies', courses: ['INTL 101', 'INTL 102'] },
    { department: 'Latin American Studies', courses: ['LATI 10', 'LATI 50', 'LATI 150'] },
    { department: 'Linguistics', courses: ['LIGN 3', 'LIGN 4', 'LIGN 7', 'LIGN 8', 'LIGN 101', 'LIGN 105', 'LIGN 174', 'LIGN 175', 'LIGN 177'] },
    { department: 'Management, Rady School of', courses: ['MGT 16', 'MGT 18', 'MGT 166'] },
    { department: 'Political Science', courses: ['POLI 10/10D-13/13D', 'POLI 100A-170A'] },
    { department: 'Psychology', courses: ['PSYC 1-7', 'PSYC 101-110', 'PSYC 114-191'] },
    { department: 'Sociology', courses: ['SOCI 1', 'SOCI 2', 'SOCI 10', 'SOCI 20', 'SOCI 30', 'SOCI 40', 'SOCI 50', 'SOCI 70', 'SOCI 100-189'] },
    { department: 'Urban Studies and Planning', courses: ['USP 2', 'USP 3'] },
  ],
  'Narrative, Aesthetic, and Historical Reasoning': [
    { department: 'African American Studies', courses: ['AAS 10'] },
    { department: 'Communication', courses: ['COMM 80'] },
    { department: 'Chinese Studies', courses: ['CHIN All Courses'] },
    { department: 'Critical Gender Studies', courses: ['CGS 108', 'CGS 119'] },
    { department: 'Global South Studies', courses: ['GSS 21-26', 'GSS 132'] },
    { department: 'History', courses: ['HILD 2A-2C', 'HILD 7A-7C', 'HILD 10-12', 'HILD 14', 'HILD 30', 'HI 100-189'] },
    { department: 'Japanese Studies', courses: ['JAPN All Courses'] },
    { department: 'Jewish Studies', courses: ['JWSP 1-3', 'JWSP 110', 'JWSP 130', 'JWSP 131'] },
    { department: 'Linguistics', courses: ['Any Linguistics course taught in languages other than English (except LIDS)'] },
    { department: 'Literature', courses: ['LT** 1-189 (except LTWR)', 'Any Literature course taught in languages other than English'] },
    { department: 'Music', courses: ['MUS 4', 'MUS 6-19', 'MUS 111', 'MUS 114', 'MUS 115', 'MUS 127', 'MUS 150'] },
    { department: 'Philosophy', courses: ['PHIL 1', 'PHIL 13-15', 'PHIL 26', 'PHIL 31-33', 'PHIL 35', 'PHIL 148', 'PHIL 160-164', 'PHIL 170'] },
    { department: 'Religion, Study of', courses: ['RELI 1', 'RELI 2', 'RELI 101', 'RELI 148', 'RELI 149'] },
    { department: 'Theatre and Dance', courses: ['TDGE 1', 'TDGE 10', 'TDGE 11', 'TDGE 25', 'TDGE 124-127', 'TDHD 20', 'TDHD 21', 'TDHD 175', 'TDHD 176', 'TDHT 10', 'TDHT 21-23', 'TDHT 103', 'TDHT 107', 'TDHT 109', 'TDHT 114'] },
    { department: 'Visual Arts', courses: ['VIS 20-22', 'VIS 84', 'VIS 85A', 'VIS 120A-C', 'VIS 121AN', 'VIS 121B', 'VIS 122AN-CN', 'VIS 122D', 'VIS 124BN-CN', 'VIS 125A', 'VIS 125BN', 'VIS 125DN', 'VIS 126AN-BN', 'VIS 126I-K', 'VIS 128A-E', 'VIS 158', 'VIS 159'] },
  ],
  'Analytic Methodologies/Scientific Method': [
    { department: 'Anthropology', courses: ['ANTH 5'] },
    { department: 'Astronomy & Astrophysics', courses: ['ASTR 1-4', 'ASTR 10', 'ASTR 15', 'ASTR 18', 'ASTR 60'] },
    { department: 'Biology', courses: ['BILD 1-3', 'BILD 7-38'] },
    { department: 'Cognitive Science', courses: ['COGS 17', 'COGS 107A'] },
    { department: 'Chemistry', courses: ['CHEM 4', 'CHEM 6A-6C', 'CHEM 6AH-6CH', 'CHEM 11-13'] },
    { department: 'Physics', courses: ['PHYS 1A/1AL-1C/1CL', 'PHYS 2A-2C', 'PHYS 4A-4E', 'PHYS 5-13'] },
    { department: 'Scripps Institution of Oceanography', courses: ['SIO 1-50'] },
    { department: 'Environmental Studies', courses: ['ENVR 102', 'ENVR 111'] },
    { department: 'Environmental Systems', courses: ['ESYS 10'] },
  ],
  'Structured Reasoning': [
    { department: 'Linguistics', courses: ['LIGN 17'] },
    { department: 'Mathematics', courses: ['MATH 4C', 'MATH 10A-10C', 'MATH 20A-20C'] },
    { department: 'Philosophy', courses: ['PHIL 10', 'PHIL 12'] },
  ],
  'Exploring Data': [
    { department: 'Bioengineering', courses: ['BENG 100', 'BENG 134'] },
    { department: 'Biology', courses: ['BIEB 100'] },
    { department: 'Chemical Engineering', courses: ['CENG 100', 'CENG 114'] },
    { department: 'Cognitive Science', courses: ['COGS 14B', 'COGS 118A-D'] },
    { department: 'Communication', courses: ['COMM 100A', 'COMM 100B'] },
    { department: 'Data Science', courses: ['DSC 40A-B', 'DSC 80'] },
    { department: 'Economics', courses: ['ECON 120A-C'] },
    { department: 'Linguistics', courses: ['LIGN 102', 'LIGN 115', 'LIGN 185'] },
    { department: 'Mathematics', courses: ['MATH 11', 'MATH 181A-B', 'MATH 183'] },
    { department: 'Psychology', courses: ['PSYC 70', 'PSYC 81', 'PSYC 101', 'PSYC 193L'] },
    { department: 'Sociology', courses: ['SOCI 60', 'SOCI 106M', 'SOCI 120T'] },
  ],
  'Writing/Composition': [
    { department: 'Analytical Writing Program', courses: ['AWP 3', 'AWP 4A-B'] },
    { department: 'Chemistry', courses: ['CHEM 105A-B'] },
    { department: 'Ethnic Studies', courses: ['ETHN 100A-B'] },
    { department: 'Human Developmental Sciences', courses: ['HDP 191'] },
    { department: 'History', courses: ['HILD 50', 'HILD 60'] },
    { department: 'Literature/Writing', courses: ['LTWR 8A-8B', 'LTWR 100-140'] },
    { department: 'Making of the Modern World', courses: ['MMW 10-15'] },
    { department: 'Philosophy', courses: ['PHIL 12'] },
    { department: 'Rhetoric and Writing Studies', courses: ['RWS 100', 'RWS 200'] },
    { department: 'Urban Studies and Planning', courses: ['USP 186'] },
  ],
};
function App() {
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedRequirement, setSelectedRequirement] = useState('');

  const handleRequirementChange = (requirement) => {
    setSelectedRequirement(requirement);
    setSelectedDepartment('');
  };

  return (
    <div className="App">
      <h1>Course Selector</h1>
      <div>
        <label>Select Requirement:</label>
        <select onChange={(e) => handleRequirementChange(e.target.value)} value={selectedRequirement}>
          <option value="">Select...</option>
          {Object.keys(coursesData).map((requirement) => (
            <option key={requirement} value={requirement}>
              {requirement}
            </option>
          ))}
        </select>
      </div>
      {selectedRequirement && (
        <DepartmentSelector
          departments={coursesData[selectedRequirement]}
          setSelectedDepartment={setSelectedDepartment}
          selectedDepartment={selectedDepartment}
        />
      )}
      {selectedDepartment && (
        <CourseList
          courses={coursesData[selectedRequirement].find((d) => d.department === selectedDepartment).courses}
        />
      )}
    </div>
  );
}

export default App;