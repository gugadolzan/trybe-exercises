const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercise 1
const addNewKey = (obj, key, value) => obj[key] = value;
addNewKey(lesson2, 'turno', 'manhã');

// Exercise 2
const showKeys = (obj) => Object.keys(obj);

// Exercise 3
const showLength = (obj) => Object.keys(obj).length;

// Exercise 4
const showValues = (obj) => Object.values(obj);

// Exercise 5
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

// Exercise 6
const totalStudents = (obj) => {
  let totalStudents = 0;
  for (const value of Object.values(obj)) {
    totalStudents += value.numeroEstudantes;
  }
  return totalStudents;
};

// Exercise 7
const getValueByNumber = (obj, keyIndex) => Object.values(obj)[keyIndex];

// Exercise 8
const verifyPair = (obj, key, value) => {
  const pairs = Object.entries(obj);
  for (const pair of pairs) {
    if (pair[0] === key && pair[1] === value) {
      return true;
    }
  }
  return false;
};

// Bonus
// Exercise 1
const getNumberOfStudents = (obj, subject) => {
  let numberOfStudents = 0;
  for (const value of Object.values(obj)) {
    if (value.materia === subject) {
      numberOfStudents += value.numeroEstudantes;
    }
  }
  return numberOfStudents;
}
