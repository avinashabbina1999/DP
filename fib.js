const { arrayBuffer } = require("stream/consumers");

const fib = (n,map = {1:1,2:1}) => {
  if(n in map) return map[n];
  map[n] = fib(n-1,map) + fib(n-2,map);
  return map[n];
};

console.log(fib(6));
console.log(fib(8));

const fib2 = (n,arr=[0,1,1]) => {
  if(n < arr.length) return arr[n];
  arr[n] = fib2(n-1,arr) + fib2(n-2,arr);
  return arr[n];
};

console.log(fib2(6));
console.log(fib2(8));

const fib3 = (n) => {
    arr = [1,1]
    for(let i = 2; i < n; i++){
      arr[i] = arr[i-1] + arr[i-2];
    }

    return arr[n-1];
};

console.log(fib3(6));
console.log(fib3(8));