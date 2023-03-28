const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const { id, firstName: name, lastName: surname, age: old = 'non indicata' } = person;
console.log(id, name, surname, old);