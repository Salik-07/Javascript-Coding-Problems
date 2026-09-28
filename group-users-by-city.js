// Expected output:
// {
//   "Karachi": [
//     { "name": "A", "city": "Karachi" },
//     { "name": "C", "city": "Karachi" },
//     { "name": "E", "city": "Karachi" }
//   ],
//   "Lahore": [
//     { "name": "B", "city": "Lahore" },
//     { "name": "D", "city": "Lahore" }
//   ]
// }

const users = [
  { name: "A", city: "Karachi" },
  { name: "B", city: "Lahore" },
  { name: "C", city: "Karachi" },
  { name: "D", city: "Lahore" },
  { name: "E", city: "Karachi" },
];

const cities = {};

users.forEach((user) => {
  if (!cities[user.city]) {
    cities[user.city] = [user];
  } else {
    cities[user.city] = [...cities[user.city], user];
  }
});

console.log(JSON.stringify(cities, null, 2));
