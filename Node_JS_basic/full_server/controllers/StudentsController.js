import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const studentGroups = await readDatabase('./database.csv');
      const fields = Object.keys(studentGroups).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

      let responseText = 'This is the list of our students\n';
      fields.forEach((field) => {
        const students = studentGroups[field];
        responseText += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      });

      res.send(200, responseText.trim());
    } catch (error) {
      res.send(500, 'Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.send(500, 'Major parameter must be CS or SWE');
      return;
    }

    try {
      const studentGroups = await readDatabase('./database.csv');
      const students = studentGroups[major];

      if (!students) {
        res.send(200, 'List: ');
        return;
      }

      res.send(200, `List: ${students.join(', ')}`);
    } catch (error) {
      res.send(500, 'Cannot load the database');
    }
  }
}

module.exports = StudentsController;
