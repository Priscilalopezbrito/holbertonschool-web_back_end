export default function getStudentsByLocation(getListStudents, city) {
  return getListStudents.filter((loc) => loc.location === city);
}
