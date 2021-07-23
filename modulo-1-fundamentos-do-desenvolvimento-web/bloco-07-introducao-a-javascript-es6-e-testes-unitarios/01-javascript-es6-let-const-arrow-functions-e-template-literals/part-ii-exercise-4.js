const skills = ['Organização', 'Comprometimento', 'Analítico', 'CSS', 'JavaScript'];

const swapWord = str => 'Tryber x aqui!'.replace(/x/g, str);

const myMainSkills = str => {
  let output = `${str} Minhas cinco principais habilidades são:`;
  for (let index = 0; index < skills.length; index += 1) {
    output += `
${skills[index]};`;
  }
  output += `
#goTrybe`
  return output;
}

console.log(myMainSkills(swapWord('Biza')));
