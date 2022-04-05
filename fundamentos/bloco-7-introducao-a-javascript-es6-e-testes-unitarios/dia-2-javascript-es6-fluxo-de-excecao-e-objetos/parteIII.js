const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

const newEntry = (obj, key, value) => {
    obj[key] = value;
}


newEntry(lesson2, 'turno', 'noite');

console.log(lesson2);

const listKeys = (obj) => {
    console.log(` ${Object.keys(obj)}`);
}

listKeys(lesson1);

const objSize = (obj) => {
    console.log(`${Object.keys(obj).length}`);
}

objSize(lesson3);

const listValues = (obj) => {
    console.log(Object.values(obj));
}

listValues(lesson3);

const allLessons = Object.assign({}, { lesson1: lesson1 }, { lesson2: lesson2 }, { lesson3: lesson3 });

console.log(allLessons)
