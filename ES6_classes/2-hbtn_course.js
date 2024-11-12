class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
        throw new TypeError('Students must be a string');
    }
    if (typeof length === 'number') {
        throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(setStudents) || !setStudents.every((student) => typeof student === 'string')) {
        throw new TypeError('Students must be a string');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(setName) {

    this._name = setName;
  }

  get length() {
    return this._length;
  }

  set length(setLength) {

    this._length = setLength;
  }

  get students() {
    return this._students;
  }

  set students(setStudents) {

    this._students = setStudents;
  }
}

export default HolbertonCourse;
