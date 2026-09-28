// Expected output: [{"name":"tour-22","phone":[923000040356,923453977766,924545454543]},{"name":"tour-23","phone":[921111111111,921111223232]}]
const routes = [
  { Route: 'tour-22', Title: 923000040356 },
  { Route: 'tour-22', Title: 923453977766 },
  { Route: 'tour-22', Title: 924545454543 },
  { Route: 'tour-23', Title: 921111111111 },
  { Route: 'tour-23', Title: 921111223232 },
];

const grouped = [];
routes.forEach((route) => {
  const index = grouped.findIndex((item) => item.name === route.Route);
  if (index < 0) grouped.push({ name: route.Route, phone: [route.Title] });
  else grouped[index].phone.push(route.Title);
});
console.log(JSON.stringify(grouped));
