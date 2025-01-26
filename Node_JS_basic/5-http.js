const http = require('node:http');
const countStudents = require('./3-read_file_async');

const path = process.argv[2];

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
    return;
  }

  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const studentsOutput = await countStudents(path); // Ensure countStudents resolves a string
      res.end(studentsOutput);
    } catch (error) {
      res.end('Cannot load the database');
    }
    return;
  }
  res.statusCode = 404;
  res.end('Page not found');
});

app.listen(1245);
module.exports = app;
