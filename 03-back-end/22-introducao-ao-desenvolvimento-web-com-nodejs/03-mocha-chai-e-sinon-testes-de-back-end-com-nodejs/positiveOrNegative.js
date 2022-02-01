module.exports = (number) => {
  if (number > 0) return 'positive';

  if (number < 0) return 'negative';

  return 'neutral';
};
