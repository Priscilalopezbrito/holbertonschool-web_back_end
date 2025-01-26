const express = require('express');
const countStudents = require('./3-read_file_async');

const path = process.argv[2];

const app = express();
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');
  try {
    const studentsOutput = await countStudents(path);
    res.end(studentsOutput);
  } catch (error) {
    res.end('Cannot load the database');
  }
});

app.listen(1245);
module.exports = app;
