import readline from "readline-sync";

import Months from "./Months";
import Seasons from "./Seasons";

const main = (): void => {
  // Getting enum keys: https://www.crojach.com/blog/2019/2/6/getting-enum-keys-in-typescript
  const monthsNames: string[] = Object.keys(Months).filter(
    (x) => !(parseInt(x) >= 0)
  );

  const choiceMonth: number = readline.keyInSelect(
    monthsNames,
    "Choose a month: "
  );

  if (choiceMonth === -1) return;

  // Seasons: https://brasilescola.uol.com.br/geografia/estacoes-ano.htm
  const seasonsNorth: { [key: number]: number[] } = {
    [Seasons.Spring]: [
      Months.March,
      Months.April,
      Months.May,
      Months.June,
    ],
    [Seasons.Summer]: [
      Months.June,
      Months.July,
      Months.August,
      Months.September,
    ],
    [Seasons.Autumn]: [
      Months.September,
      Months.October,
      Months.November,
      Months.December,
    ],
    [Seasons.Winter]: [
      Months.December,
      Months.January,
      Months.February,
      Months.March,
    ],
  };

  const seasonsSouth: { [key: number]: number[] } = {
    [Seasons.Spring]: seasonsNorth[Seasons.Autumn],
    [Seasons.Summer]: seasonsNorth[Seasons.Winter],
    [Seasons.Autumn]: seasonsNorth[Seasons.Spring],
    [Seasons.Winter]: seasonsNorth[Seasons.Summer],
  };

  const hemispheres: { [key: string]: { [key: number]: number[] } } = {
    North: seasonsNorth,
    South: seasonsSouth,
  };

  const choiceHemisphere: number = readline.keyInSelect(
    Object.keys(hemispheres),
    "Choose a hemisphere: "
  );

  if (choiceMonth === -1) return;

  const month: string = monthsNames[choiceMonth];
  const hemisphere: string = Object.keys(hemispheres)[choiceHemisphere];

  const chosenHemisphereSeasons: { [key: number]: number[] } =
    Object.values(hemispheres)[choiceHemisphere];

  const seasons: string[] = Object.entries(chosenHemisphereSeasons)
    .map(([season, months]) => {
      const seasonName: string = Seasons[Number(season)];
      const monthsNames: string[] = months.map((month) => Months[month]);

      if (monthsNames.includes(month)) return seasonName;
    })
    .filter((x) => x);

  console.log("\n");
  console.log(`Month: ${month}`);
  console.log(`Hemisphere: ${hemisphere}`);
  console.log(`Seasons: ${seasons.join(", ")}`);
};

main();
