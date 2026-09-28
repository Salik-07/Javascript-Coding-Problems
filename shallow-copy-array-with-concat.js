// Expected output:
// x [{"name":"salik hussain"},{"name":"andrew"}]
// person [{"name":"salik hussain"}]
const person = [{ name: 'salik' }];
const x = person.concat({ name: 'andrew' });
x[0].name = 'salik hussain';
console.log('x', JSON.stringify(x));
console.log('person', JSON.stringify(person));
