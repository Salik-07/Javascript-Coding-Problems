// Expected output:
// name
// age
// contactDetails.email
// contactDetails.phoneNumber
// contactDetails.nested.keyOne
// contactDetails.nested.keyTwo

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

function getKeys(object, parentKey = '') {
  for (const key in object) {
    const fullKey = parentKey ? `${parentKey}.${key}` : key;

    if (typeof object[key] === 'object' && object[key] !== null) {
      getKeys(object[key], fullKey);
    } else {
      console.log(fullKey);
    }
  }
}

getKeys(person);
