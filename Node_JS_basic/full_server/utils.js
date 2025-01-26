import fs from 'fs/promises';

function readDatabase(filePath) {
  return fs.readFile(filePath, 'utf8')
    .then((data) => {
      const lines = data.trim().split('\n');
      const headers = lines.shift().split(',');
      const fieldIndex = headers.indexOf('field');
      const firstNameIndex = headers.indexOf('firstname');

      if (fieldIndex === -1 || firstNameIndex === -1) {
        throw new Error('Invalid CSV format');
      }

      const fields = {};

      for (const line of lines) {
        const row = line.split(',');
        const field = row[fieldIndex];
        const firstName = row[firstNameIndex];

        if (field && firstName) {
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstName);
        }
      }

      return fields;
    })
  // eslint-disable-next-line no-unused-vars
    .catch((err) => {
      throw new Error('Cannot load the database');
    });
}

export default readDatabase;
