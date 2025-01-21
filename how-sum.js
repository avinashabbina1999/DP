const howSum = (target,numbers,memo={}) => {
  if(target in memo) return memo[target];
  if(target === 0) return [];
  if(target < 0) return null;

  for(let num of numbers){
    const remainder = howSum(target-num,numbers,memo);
    if(remainder !== null){
      return memo[target] = [...remainder,num];    
    }
    return memo[target] = null;
  }
};

console.log(howSum(8,[2,3,5]));
console.log(howSum(300,[7,14]));

const howSum2 = (target,numbers) => {
  const table = Array(target+1).fill(null);
  table[0] = [];

  for(let i=0;i<target+1;i++){
    if(table[i]!==null){
      for(let num of numbers){
        if(i+num<target+1) table[i+num] = [...table[i],num];
      }
    }
  }
  return table[target];
};

console.log(howSum2(8,[2,3,5]));
console.log(howSum2(300,[7,14]));
