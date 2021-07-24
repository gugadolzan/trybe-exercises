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

const addNewKey = (obj, key, value) => obj[key] = value;
addNewKey(lesson2, 'turno', 'manhã');

const showKeys = (obj) => Object.keys(obj);

const showLength = (obj) => Object.keys(obj).length;

const showValues = (obj) => Object.values(obj);

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

const totalStudents = (obj) => {
  let totalStudents = 0;
  for (const value of Object.values(obj)) {
    for (const key in value) {
      if (key === 'numeroEstudantes') {
        totalStudents += value[key];
      }
    }
  }
  return totalStudents;
}
console.log(totalStudents(allLessons));
