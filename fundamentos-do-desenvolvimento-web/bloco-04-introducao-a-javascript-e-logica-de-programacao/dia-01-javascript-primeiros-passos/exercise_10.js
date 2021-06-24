let cost = 75,
  sale = 100;

if (cost >= 0 && sale >= 0) {
  // alternative resolution: declaring each variable
  // let totalCost = cost + 0.2 * cost,
  // earnings = sale - totalCost;
  // console.log(earningssale);
  console.log(sale - (cost + 0.2 * cost));
} else {
  console.log('error 404 not found');
};