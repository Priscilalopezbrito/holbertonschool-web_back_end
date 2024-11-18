export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  if (!Array.isArray(getListStudents)) {
    return [];
  }

  return getListStudents
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeOj = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: gradeOj ? gradeOj.grade : 'N/A',
      };
    });
}
