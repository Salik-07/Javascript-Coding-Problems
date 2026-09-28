// Expected output:
// toJSON called for: Hal
// {"name":"Hal"}
const pet = {
  name: 'Hal',
  age() { console.log('18'); },
};

pet.toJSON = function () {
  console.log('toJSON called for:', this.name);
  return this;
};

console.log(JSON.stringify(pet));
