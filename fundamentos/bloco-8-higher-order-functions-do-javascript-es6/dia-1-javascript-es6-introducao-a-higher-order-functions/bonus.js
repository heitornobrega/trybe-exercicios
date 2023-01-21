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

// função que calcula o dano de qualquer personagem;
const characterDamage = (danoMaximo, danoMinimo) => Math.round(Math.random() * (danoMaximo - danoMinimo) + danoMinimo);

//1 - Dano do dragon
const dragonDamage = () => characterDamage(dragon.strength, 15); 
//2 - Dano do warrior
const warriorDamage = () => characterDamage((warrior.strength * warrior.weaponDmg), warrior.strength); 
// 3.1 Dano do mage
const mageDamage = () => characterDamage(mage.intelligence * 2, mage.intelligence);
// 3.2.1 Mana do mage gasta por turno
const manaMageSpend = () => {
  if (mage.mana < 15) {
   return mage.mana = `${mage.mana} Não possui mana suficiente`;
  }
   return mage.mana = mage.mana - 15;
}
// 3.2 Obj contendo a mana e o dano do mage por turno;
const mageTurnResult = () => {
  return {
    dano: mageDamage(),
    mana: manaMageSpend()
  }
}

const gameActions = {
  turnoWarrior: (warriorDamage) => {
    dragon.healthPoints -= warriorDamage
    warrior.damage -= warriorDamage
  },
  turnoMage: (mageDamage) => {
    dragon.healthPoints -= mageDamage
    mage.damage -= mageTurnResult().damage,
    mage.mana -= mageTurnResult().mana
  },
  turnoDragon: (dragonDamage) => {
    warrior.healthPoints -= dragonDamage;
    mage.healthPoints -= dragonDamage
    dragon.damage -= dragonDamage;
  },
  updateBattleMembers: () => battleMembers
};

gameActions.turnoWarrior(warriorDamage());
gameActions.turnoMage(warriorDamage());
gameActions.turnoDragon(warriorDamage());
console.table(gameActions.updateBattleMembers());

gameActions.turnoWarrior(warriorDamage());
gameActions.turnoMage(warriorDamage());
gameActions.turnoDragon(warriorDamage());
console.table(gameActions.updateBattleMembers());

