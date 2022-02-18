import readline from "readline-sync";

import utils from "./utils";

const main = (): void => {
  const scripts: { [key: string]: string }[] = [
    { name: "Length converter", unit: "m" },
    { name: "Mass converter", unit: "g" },
    { name: "Capacity converter", unit: "l" },
    { name: "Area converter", unit: "m²" },
    { name: "Volume converter", unit: "m³" },
  ];

  const choice: number = readline.keyInSelect(
    scripts.map(({ name }) => name),
    "Choose a converter to run: \n"
  );

  if (choice === -1) return;

  const units: string[] = ["k", "h", "da", "d", "c", "m"].map(
    (unit) => unit + scripts[choice].unit
  );
  units.splice(3, 0, scripts[choice].unit);

  const values: number[] = [1000, 100, 10, 1, 0.1, 0.01, 0.001];

  const conversionTable: { [key: string]: number } = units.reduce(
    (acc, unit, index) => ({
      ...acc,
      [unit]: values[index],
    }),
    {}
  );

  utils.exec(conversionTable);
}

main();
