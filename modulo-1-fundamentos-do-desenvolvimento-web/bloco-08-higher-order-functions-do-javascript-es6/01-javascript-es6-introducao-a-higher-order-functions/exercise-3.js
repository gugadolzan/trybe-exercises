const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const isItCorrect = (right, student) => {
  if (right === student) return 1;
  if (student === 'N.A') return 0;
  return -0.5;
}

const finalResult = (rightAnswers, studentAnswers, callback) => {
  let sum = 0;
  for (let i = 0; i < rightAnswers.length; i += 1) {
    sum += callback(rightAnswers[i], studentAnswers[i]);
  }
  return `Pontuação final = ${sum}`;
};

console.log(finalResult(RIGHT_ANSWERS, STUDENT_ANSWERS, isItCorrect));
