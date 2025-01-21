const canSum = (target,numbers,memo={}) => {
  if(target in memo) return memo[target];
  if(target === 0)  return true;
  if(target < 0) return false;

  for(let num of numbers){
    if(canSum(target-num,numbers,memo) === true){
      return memo[target] = true;
    }
    return memo[target] = false;
  }
};

console.log(canSum(8,[2,3,5]));
console.log(canSum(300,[7,14]));

const canSum2 = (target,numbers) => {
  const table = Array(target+1).fill(false);
  table[0] = true;

  for(let i=0;i<target+1;i++){
    if(table[i]===true){
      for(let num of numbers){
        if(i+num<target+1) table[i+num] =  true;
      }
    }
  }
  return table[target];
};

console.log(canSum2(8,[2,3,5]));
console.log(canSum2(300,[7,14]));