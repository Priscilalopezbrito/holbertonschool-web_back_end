export default function getStudentIdsSum(getListStudents) {
  return getListStudents.reduce((sum, student) => sum + student.id, 0);
}
