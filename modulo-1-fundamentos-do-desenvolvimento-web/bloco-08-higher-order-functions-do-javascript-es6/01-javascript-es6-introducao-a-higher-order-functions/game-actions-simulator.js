const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// To generate a random number between two numbers: Math.floor(Math.random() * (maxNumber + 1 (to include maxNumber) - minNumber) + minNumber);
const dragonDamage = (dragon) => Math.floor(Math.random() * (dragon.strength + 1 - 15) + 15);

const warriorDamage = (warrior) => Math.floor(Math.random() * (warrior.strength * warrior.weaponDmg + 1 - warrior.strength) + warrior.strength);

const mageDamage = (mage) => (mage.mana < 15) ? { damage: 'Não possui mana suficiente', manaSpent: 0 } : { damage: Math.floor(Math.random() * (mage.intelligence * 2 + 1 - mage.intelligence) + mage.intelligence), manaSpent: 15 };
