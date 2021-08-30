const techList = (technologies, name) =>
  technologies.length === 0
    ? 'Vazio!'
    : technologies.sort().map((tech) => ({ tech, name }));

module.exports = techList;
