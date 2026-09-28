// Expected output:
// person: { name: 'Salik' }

const person = {
  name: "Salik"
};

function greet (p) {
  // p.name = "John"

  // console.log("p", p)

  p = {
    age: 28
  }
}

greet(person);

console.log("person:", person)
