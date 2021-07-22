let salary = 3000,
  inssSalary,
  finalSalary;

if (salary <= 1556.94) {
  inssSalary = salary - salary * 0.08;
} else if (salary <= 2594.92) {
  inssSalary = salary - salary * 0.09;
} else if (salary <= 5189.82) {
  inssSalary = salary - salary * 0.11;
} else {
  inssSalary = salary - 570.88;
};

if (inssSalary <= 1903.98) {
  finalSalary = inssSalary;
} else if (inssSalary <= 2826.65) {
  finalSalary = inssSalary - (inssSalary * 0.075 - 142.80);
} else if (inssSalary <= 3751.05) {
  finalSalary = inssSalary - (inssSalary * 0.15 - 354.80);
} else if (inssSalary <= 4664.68) {
  finalSalary = inssSalary - (inssSalary * 0.225 - 636.13);
} else {
  finalSalary = inssSalary - (inssSalary * 0.275 - 869.36);
};

console.log('O salário líquido será de R$ ' + finalSalary);