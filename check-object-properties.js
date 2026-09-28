// Expected output:
// false
// function
// Exist
// Exist
// Exist

const person = {
  name: 'Salik',
  age: 30,
  contactDetails: {
    email: 'salikhussain41@gmail.com',
    phoneNumber: '0321-2784591',
    nested: {
      keyOne: '1',
      keyTwo: '2',
    },
  },
};

console.log(Object.prototype.hasOwnProperty.call(person, 'toString'));
console.log(typeof person.hasOwnProperty);

for (const key in person) {
  if (person['toString']) {
    console.log('Exist');
  } else {
    console.log(key);
  }
}
