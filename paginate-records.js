// Expected output: [{"id":10}]
const data = Array.from({ length: 10 }, (_, index) => ({ id: index + 1 }));

function paginatedRecords(page, limit) {
  const start = (page - 1) * limit;
  return data.slice(start, start + limit);
}

console.log(JSON.stringify(paginatedRecords(4, 3)));
