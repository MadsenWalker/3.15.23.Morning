
let best = (prices,size) => {
let maxDiff = prices[1] - prices[0]
for ( let i = 0; i < size; i++) {
 for ( let j = i+1; j < size; j++){
    if (prices[j]-prices[i] > maxDiff)
    maxDiff = prices[j] - prices[i] 
   }
 
}
return maxDiff
}

let prices = [15,10,20,22,5,3]
let n = prices.length

console.log(best(prices,n))
newPrices()
function newPrices(){prices = [1,2,3,4,5]}
console.log(best(prices,n))
newPrices2()
function newPrices2(){prices = [10,18,14,20,21,7]}
console.log(best(prices,n))
