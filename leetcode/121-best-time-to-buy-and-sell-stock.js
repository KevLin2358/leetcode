var maxProfit = function (prices) {
  let counter = 0;
  let profit = 0;
  let min = prices[0];

  while (counter < prices.length) {
    if (min > prices[counter]) min = prices[counter];
    else if (profit < prices[counter] - min) profit = prices[counter] - min;
    counter++;
  }
  return profit;
};

// var maxProfit = function(prices) {
//   let min = prices[0];
//   let profit = 0;

//   for(let i = 0; i < prices.length; i++){
//       if(prices[i] < min) min = prices[i];
//       if(profit < prices[i] - min) profit = prices[i] - min;
//   }
//   return profit;
// };
