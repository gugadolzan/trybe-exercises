import readline from "readline-sync";

const convert = (
  units: { [key: string]: number },
  value: number,
  fromUnit: string,
  toUnit: string
): number => {
  const from: number = units[fromUnit];
  const to: number = units[toUnit];

  const result: number = (value * from) / to;

  return result;
};

const exec = (units: { [key: string]: number }): void => {
  const value: number = readline.questionFloat("Enter a value to convert: \n");

  const fromUnitChoice: number = readline.keyInSelect(
    Object.keys(units),
    "Choose a unit to convert from: \n"
  );

  if (fromUnitChoice === -1) return;

  const toUnitChoice: number = readline.keyInSelect(
    Object.keys(units),
    "Choose a unit to convert to: \n"
  );

  if (toUnitChoice === -1) return;

  const fromUnit: string = Object.keys(units)[fromUnitChoice];
  const toUnit: string = Object.keys(units)[toUnitChoice];

  const result: number = convert(units, value, fromUnit, toUnit);

  const message: string = `${value}${fromUnit} is ${result}${toUnit}`;

  console.log(message);
};

export default {
  convert,
  exec,
};
