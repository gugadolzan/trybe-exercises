import Pizza from "./Pizza";

type Common = "Calabresa" | "Frango" | "Pepperoni";
type Vegetarian = "Margherita" | "Palmito" | "Cogumelos";
type Sugar = "Nutella" | "Goiabada com Queijo" | "Marshmallow";

interface CommonPizza extends Pizza {
  flavor: Common;
}

interface VegetarianPizza extends Pizza {
  flavor: Vegetarian;
}

interface SugarPizza extends Pizza {
  flavor: Sugar;
  slices: 4;
}

export { CommonPizza, VegetarianPizza, SugarPizza };
