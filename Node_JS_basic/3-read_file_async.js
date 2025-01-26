const fs = require('fs');
const path = require('path');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      try {
        const lines = data.trim().split('\n');
        const headers = lines.shift().split(',');
        const fieldIndex = headers.indexOf('field');
        const firstNameIndex = headers.indexOf('firstname');

        if (fieldIndex === -1 || firstNameIndex === -1) {
          reject(new Error('Invalid CSV format'));
          return;
        }

        const students = lines.map((line) => line.split(','));
        const studentGroups = students.reduce((acc, student) => {
          const field = student[fieldIndex];
          const firstName = student[firstNameIndex];

          if (field && firstName) {
            if (!acc[field]) {
              acc[field] = [];
            }
            acc[field].push(firstName);
          }

          return acc;
        }, {});

        console.log(`Number of students: ${students.length}`);
        Object.entries(studentGroups).forEach(([field, names]) => {
          console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        });

        resolve();
      } catch (parseError) {
        reject(new Error('Cannot parse the database'));
      }
    });
  });
}

module.exports = countStudents;
