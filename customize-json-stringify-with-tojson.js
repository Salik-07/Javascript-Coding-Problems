// Expected output:
// { name: 'Hal', age: [Function: age], toJSON: [Function (anonymous)] }
// {"name":"Hal"}

const pet = {
  name: 'Hal',
  age() {
    console.log('18');
  },
};

pet.toJSON = function () {
  console.log(this);
  return this;
};

console.log(JSON.stringify(pet));
