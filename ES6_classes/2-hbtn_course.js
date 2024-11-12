class HolbertonCourse {
    constructor(name, length, students) {
        this.name = name;
        this.length = length;
        this.students = students;
    }


    /*Getters*/
    get name() {
        return this._name;
    }

    get length() {
        return this._length;
    }

    get students() {
        return this._students;
    }

    /*Setters*/
    set name(setName) {
        if (typeof setName !== 'string') {
            throw new Error('The name must be a string');
        }
        this._name = setName;
    }

    set length(setLength) {
        if (typeof setLength !== 'number') {
            throw new Error('The length must be a number');
        }
        this._length = setLength;
    }

    set students(setStudents) {
        if (typeof setStudents !== 'string') {
            throw new Error('The students must be a string');
        }
        this._students = setStudents;
    }
}