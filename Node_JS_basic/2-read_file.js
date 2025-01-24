const fs = require('fs');

function countStudents(path) {
  try {
    // Read file and split
    const data = fs.readFileSync(path, 'utf-8').trim().split('\n');

    // Check if no students
    if (data.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    const records = data.slice(1).map((line) => line.split(','));
    const studentsByField = {};

    records.forEach(([firstName, , , field]) => {
      if (field) {
        studentsByField[field] = studentsByField[field] || [];
        studentsByField[field].push(firstName);
      }
    });

    console.log(`Number of students: ${records.length}`);

    for (const [field, students] of Object.entries(studentsByField)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
