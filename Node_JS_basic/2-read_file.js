const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8').trim();

    // Split lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    const records = lines.slice(1).map((line) => line.split(','));
    const studentsByField = {};

    records.forEach(([firstName, , , field]) => {
      if (field) {
        studentsByField[field] = studentsByField[field] || [];
        studentsByField[field].push(firstName);
      }
    });

    console.log(`Number of students: ${records.length}`);

    for (const [field, students] of Object.entries(studentsByField)) {
      console.log(
        `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`,
      );
    }
  } catch (err) {
    // Throw error if file cannot be read
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
