// Expected output:
// {
//   id: 4,
//   managees: [ { id: 4.1, managees: [] }, { id: 4.2, managees: [] } ]
// }

const data = [
  {
    id: 1,
    managees: [
      {
        id: 2,
        managees: [],
      },
      {
        id: 3,
        managees: [
          {
            id: 4,
            managees: [
              {
                id: 4.1,
                managees: [],
              },
              {
                id: 4.2,
                managees: [],
              },
            ],
          },
          {
            id: 5,
            managees: [],
          },
        ],
      },
    ],
  },
  {
    id: 6,
    managees: [
      {
        id: 7,
        managees: [],
      },
      {
        id: 8,
        managees: [
          {
            id: 9,
            managees: [],
          },
          {
            id: 10,
            managees: [],
          },
        ],
      },
    ],
  },
];

function findManagees(d, id) {
  for (const managee of d) {
    if (managee.id === id) return managee;

    const found = findManagees(managee.managees, id);
    if (found) return found;
  }

  return null;
}

console.log(findManagees(data, 4));
