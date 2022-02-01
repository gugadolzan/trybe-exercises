module.exports = (number) => {
  if (typeof number !== 'number') return 'value must be a number';

  if (number > 0) return 'positive';

  if (number < 0) return 'negative';

  return 'neutral';
};
