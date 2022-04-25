// definindo o objeto
const character = {
    name: 'Heitor',
    age: '28',
    description: {
      specieName: 'Human',
      jedi: true,
    },
    homeWorld: {
      name: 'Terra',
      population: '200000',
    },
};
const { name, age, homeWorld:{name: planetName}, description:{jedi} } = character;

console.log(`Nome: ${name}
idade: ${age}
Vive em: ${planetName}
é Jedi: ${jedi}`)
