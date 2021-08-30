let grade = 80;

if (grade <= 100 && grade >= 0) {
  if (grade >= 90) {
    console.log('A grade');
  } else if (grade >= 80) {
    console.log('B grade');
  } else if (grade >= 70) {
    console.log('C grade');
  } else if (grade >= 60) {
    console.log('D grade');
  } else if (grade >= 50) {
    console.log('E grade');
  } else {
    console.log('F grade');
  };
} else {
  console.log('error 404 not found');
};