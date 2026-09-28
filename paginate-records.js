// Expected output:
// [ { id: 10 } ]

const data = [{
  id: 1,
},{
  id: 2,
},{
  id: 3,
},{
  id: 4,
},{
  id: 5,
},{
  id: 6,
},{
  id: 7,
},{
  id: 8,
},{
  id: 9,
},{
  id: 10,
}];

function paginatedRecords(page, limit) {
  const records = [...data];
  const pageNumber = (page - 1) * limit;

  return records.slice(pageNumber, pageNumber + limit);
}

console.log(paginatedRecords(4, 3));
