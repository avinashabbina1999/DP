const bestSum = (target,numbers,memo={}) => {
  if(target in memo) return memo[target];
  if(target === 0) return [];
  if(target < 0) return null;

  let result = null;

  for(let num of numbers){
    const remainder = bestSum(target-num,numbers,memo);
    if(remainder !== null){
      const combination = [...remainder,num];
      if(result === null || combination.length < result.length){
        result = combination;
      }
    }
  }

  return memo[target] = result;
}


console.log(bestSum(8,[2,3,5]));
console.log(bestSum(300,[7,14]));
console.log(bestSum(100,[1,2,5,25]));

const bestSum2 = (target,numbers) => {
  const table = Array(target+1).fill(null);
  table[0] = [];

  for(let i =0;i<target+1;i++){
    if(table[i] !== null){
      for(let num of numbers){
        if(i+num<target+1){
          const comb =  [...table[i],num];
          if(table[i+num] === null || table[i+num].length > comb.length){
            table[i+num] = comb;
          }
        }
      }
    }
  }

  return table[target];
};

console.log(bestSum2(8,[2,3,5]));
console.log(bestSum2(300,[7,14]));
console.log(bestSum2(100,[1,2,5,25]));