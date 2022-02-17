const convert = (value: number, fromUnit: string, toUnit: string): number => {
  const conversionTable: { [key: string]: number } = {
    k: 1000,
    h: 100,
    da: 10,
    d: 0.1,
    c: 0.01,
    m: 0.001,
  };

  const from: number = conversionTable[fromUnit.slice(0, -1)] || 1;
  const to: number = conversionTable[toUnit.slice(0, -1)] || 1;

  const valueInBaseUnit: number = value * from;
  const valueConverted: number = valueInBaseUnit / to;

  return valueConverted;
};
