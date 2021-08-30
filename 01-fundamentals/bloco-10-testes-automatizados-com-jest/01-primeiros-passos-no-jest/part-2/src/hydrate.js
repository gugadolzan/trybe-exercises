const hydrate = (sentence) => {
  const glassOfWater = sentence
    .match(/\d+/g)
    .reduce((acc, curr) => acc + Number(curr), 0);

  return `${glassOfWater} copo${glassOfWater > 1 ? 's' : ''} de água`;
};

module.exports = hydrate;
